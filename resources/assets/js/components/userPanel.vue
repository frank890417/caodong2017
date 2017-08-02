<template lang="jade">
.userPanel
  transition(name="fade")
    .fullPagePanel(v-show="memberPanelOpened")
      .panelBody
        h3 會員專區
        h5(v-if="user") 會員 {{user.name}} 您好。
        ul.navs
          li.nav( @click="managePaging='login'", v-if="!user")
            img.icon(src="/img/元件/ICON/ICON-25.png", alt="")
            span 登入
          li.nav(@click="logout", v-if="user")
            img.icon(src="/img/元件/ICON/ICON-13.png", alt="")
            span 登出
          li.nav( @click="managePaging='cart'")
            img.icon(src="/img/元件/ICON/ICON-45.png", alt="")
            span 購物車
          li.nav(@click="managePaging='data'")
            img.icon(src="/img/元件/ICON/ICON-33.png", alt="")
            span 資料修改
          li.nav(@click="managePaging='reord'")
            img.icon(src="/img/元件/ICON/ICON-36.png", alt="")
            span 訂單查詢
        .navFixed
        div
          .subPanel(v-if="managePaging=='login'", key='data')
            h4 登入
            .row.form-group
              label.col-md-4.control-label(for='login_email') 信箱
              .col-md-6
                input#login_email.form-control(type='text', name='email', v-model='loginData.email', required='', autofocus='')
            .row.form-group
              label.col-md-4.control-label(for='login_pwd') 密碼
              .col-md-6
                input#login_pwd.form-control(type='password', name='login_pwd', v-model='loginData.password', required='')
            .row.form-group
              .col-md-6.col-md-offset-4.btns
                button.btn(type='submit', @click.prevent='login')
                  | 登入
                a.btn.btn-fb(href="redirect", target="_blank") FB Login
              
          .subPanel(v-if="managePaging=='cart'", key='cart')
            h4 購物車
            transition-group.buyCart(tag="ul" , name="fade-delay")
              li.buyItem(v-for="(item,itemId) in cart" ,
                         :key="itemId")
                .name {{itemId+1}}. {{item.title}}
                
                .price 
                  span.textPrice {{item.price}}元
                  span.textCount x{{item.count?item.count:1}}
                  .hoverOpacity.pull-right(@click="cart.splice(itemId,1)")
                    img.icon(src="/img/元件/ICON/ICON-09.png", alt="", style="width: 20px")

              
              li.buyItem(:key="-2")
                br
                br
              li.buyItem.total(:key="-1")
                .name 總計
                .price {{totalPrice}}元
            div.text-right.hoverOpacity(@click="checkOut") 
              img.icon(src="/img/元件/ICON/ICON-06.png", alt="")
              | 結帳
          .subPanel(v-if="managePaging=='data'", key='data')
            .row.form-group(:class="{'has-error' : hasErrors.name}")
              label.col-md-4.control-label(for='name') Name
              .col-md-6
                input#name.form-control(type='text', name='name', v-model='registerData.name', required='', autofocus='')
                span.help-block(v-if='hasErrors.name')
                  strong {{errorMessage.name}}
            .row.form-group(:class="{'has-error' : hasErrors.email}")
              label.col-md-4.control-label(for='email') E-Mail Address
              .col-md-6
                input#email.form-control(type='email', name='email', v-model='registerData.email', required='')
                span.help-block(v-if='hasErrors.email')
                  strong {{errorMessage.email}}
            .row.form-group(:class="{'has-error' : hasErrors.password}")
              label.col-md-4.control-label(for='password') Password
              .col-md-6
                input#password.form-control(type='password', name='password', v-model='registerData.password', required='')
                span.help-block(v-if='hasErrors.password')
                  strong {{errorMessage.password}}
            .row.form-group
              label.col-md-4.control-label(for='password-confirm') Confirm Password
              .col-md-6
                input#password-confirm.form-control(type='password', name='password_confirmation', v-model='registerData.password_confirmation', required='')
            .row.form-group
              .col-md-6.col-md-offset-4
                button.btn(type='submit', @click.prevent='registerPost()')
                  | Register
          .subPanel(v-if="managePaging=='record'", key='record')




  ul.fixedBtns
    li.btnCheckOut(@click="toggleMemberPanel") 
      .len {{cart.length}}
      img.icon(src="/img/元件/ICON/ICON-33.png", alt="" ,title="點擊加入購物車")
      
    li.btnMember(@click="toggleMemberPanel")
      img.icon(src="/img/元件/ICON/ICON-25.png", alt="" ,title="點擊加入購物車")
    
</template>

<script>
import {mapState , mapMutations , mapActions} from 'vuex'
import $ from 'jquery'
import _ from 'lodash'
export default {
  data () {
    return {
      indexHeight: -1,
      loginData: {
        email: '',
        password: ''
      },
      registerData:{
          name:'',
          email:'',
          password:'',
          password_confirmation:''
      },
      hasErrors:{
          name:false,
          email:false,
          password:false
      },
      errorMessage:{
          name:null,
          email:null,
          password:null
      },
      managePaging: "cart"
    }
  },
  methods: {
    ...mapMutations(['scrollTo','toggleMemberPanel']),
    ...mapActions(['checkOut']),
    registerPost(){
        var _this = this
        var vm = this.hasErrors
        var _vm = this.errorMessage
        axios.post('register', _this.registerData)
        .then(function (response) {
          console.log(response);
          location.reload();
        })
        .catch(function (error) {
            var errors = error.response
            if(errors.statusText === 'Unprocessable Entity'){
                if(errors.data){
                    if(errors.data.name){
                        vm.name = true
                        _vm.name = _.isArray(errors.data.name) ? errors.data.name[0]: errors.data.name
                    }
                    if(errors.data.email){
                        vm.email = true
                        _vm.email = _.isArray(errors.data.email) ? errors.data.email[0]: errors.data.email
                    }
                    if(errors.data.password){
                        vm.password = true
                        _vm.password = _.isArray(errors.data.password) ? errors.data.password[0]: errors.data.password
                    }
                }
            }
        });
    },
    login(){
      let logindata = this.loginData
      logindata._token = document.querySelector("meta[name='csrf-token']").content
      logindata._method = "post"
      axios.post('login', logindata )
        .then(function (response) {
          console.log(response);
          location.reload()
        })
      console.log("click login")
    },
    logout(){
      document.getElementById('logout-form').submit()
      console.log("click logout")
    }
    

  },
  mounted(){
    this.indexHeight=$(".pageIndex").outerHeight()
  },
  computed:{
    ...mapState(['scrollTop','cart','memberPanelOpened','user']),
    totalPrice(){
      return this.cart.reduce((total,item)=>(total+=item.price*(item.count?item.count:1)),0)
    }
  }
}
</script>
