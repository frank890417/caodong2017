<template lang="jade">
.page.pageWorks.section
  .back_img
    .left_img
      .tile
    .content
      .left.col_album
        .cover
          img.album_cover(alt="works",src="/img/03_WORKS/album.jpg")
          .title 醜奴兒
          .eng The Servile
        .tracks
          .track(v-for="(track,id) in trackdata",
                 :class="{active: playingId==id}",
                 @click="playingId=id")
            img(:src="track.img")
      transition-group.right.col_lyrics(
        tag="div", 
        name="fade",
        mode="out-in")
        p(v-html="replaceBr(track.lyrics)",
          v-for="(track,id) in trackdata",
          v-show="id==playingId",
          :key="track")
  

      
</template>

<script>

import {mapState} from 'vuex'
export default {
  methods: {
    replaceBr(text){
      return text.replace(/(?:\r\n|\r|\n)/g,"<br>")
    }
  },
  data () {
    return {
      playingId: 1,
      trackdata: [
        {
          name: "INTRO",
          img: "/img/03_WORKS/歌名/INTRO.png",
          audio: "",
          lyrics: `我試過握著她的手 卻還是一樣寂寞
          從沒想過 原來自己那麼醜陋
          原來自己那麼醜陋

          我說得像切身之痛 卻一直在退縮
          從沒想過 原來自己那麼醜陋
          原來自己那麼醜陋`
        },
        {
          name: "醜",
          img: "/img/03_WORKS/歌名/醜.png",
          audio: "",
          lyrics: `噢多麼美麗的一顆心
          怎麼會 怎麼會 就變成了一灘爛泥
          噢多麼單純的一首詩
          怎麼會 怎麼會 都變成了諷刺

          我想要說的 前人們都說過了
          我想要做的 有錢人都做過了
          我想要的公平都是不公們虛構的

          噢多麼乾淨的一幅畫
          怎麼會 怎麼會 充滿了悲傷
          噢多麼天真的一句話
          怎麼會 怎麼會 像噩夢一樣`
        },
        {
          name: "爛泥",
          img: "/img/03_WORKS/歌名/爛泥.png",
          audio: "",
          lyrics: `噢多麼美麗的一顆心
          怎麼會 怎麼會 就變成了一灘爛泥
          噢多麼單純的一首詩
          怎麼會 怎麼會 都變成了諷刺

          我想要說的 前人們都說過了
          我想要做的 有錢人都做過了
          我想要的公平都是不公們虛構的

          噢多麼乾淨的一幅畫
          怎麼會 怎麼會 充滿了悲傷
          噢多麼天真的一句話
          怎麼會 怎麼會 像噩夢一樣`
        },
        {
          name: "勇敢的人",
          img: "/img/03_WORKS/歌名/勇敢的人.png",
          audio: "",
          lyrics: `又忍著失望的不解的痛恨的 又只用空瓶把今天砸碎
          然後又哭著對離開了自己的影子道歉
          別氣了沒有誰在跟你作對 別哭了沒有誰會心碎
          沒有勇敢的人
          勇敢的人

          賣光了一切 你的肝和你的肺
          他們扔了你的世界 去成為更好的人類
          那廉價的眼淚就別掛在嘴邊
          什麼也沒改變 什麼也不改變

          請別舉起手槍 這裡沒有反抗的人
          不用再圍牆 這裡沒有反抗的人
          反抗的人

          所謂的過生活 一輩子他都在躲
          一直在躲一直在躲 沒有出口沒有出口

          大風吹 Simon Says`
        },
        {
          name: "大風吹",
          img: "/img/03_WORKS/歌名/大風吹.png",
          audio: "",
          lyrics: `大風吹著誰 誰就倒楣
          每個人都想當鬼 都一樣的下賤

          哭啊 喊啊 叫你媽媽帶你去買玩具啊
          快 快拿到學校炫耀吧 孩子 交點朋友吧
          哎呀呀 你看你手上拿的是什麼啊
          那東西我們早就不屑啦 哈哈哈 哈

          一樣又醉了 一樣又掉眼淚
          一樣的屈辱 一樣的感覺
          怪罪給時間 它給了起點
          怪罪給時間 它給了終點`
        },
        {
          name: "艾瑪",
          img: "/img/03_WORKS/歌名/艾瑪.png",
          audio: "",
          lyrics: `歌唱著一種沒有深度的語言
          試著跟著這些虛偽一起改變
          改變

          Hypocrisy…
          妳笑著說我所擁有的一切 也都是虛偽
          妳笑著說我所有的謊言 活不過明天

          交換著一種不負責任的畫面
          試著跟著這些標籤一起改變 改變`
        },
        {
          name: "等",
          img: "/img/03_WORKS/歌名/等.png",
          audio: "",
          lyrics: `我在等的那部車呢 它會不會又拋錨了
          我在等的那個人呢 祂會不會又不來了

          你在等的那部車呢 它會不會也拋錨了
          你在等的那個人呢 祂會不會也不來了`
        },
        {
          name: "⻤",
          img: "/img/03_WORKS/歌名/⻤.png",
          audio: "",
          lyrics: `從沒想過要傷害誰 對一切也都感到抱歉
          可是我的自卑勝過了一切愛我的
          於是我把愛人們都殺死了
          可是你的傷悲勝過了一切愛你的
          於是你把我給殺死了

          為了什麼而流著血 是為了誰而流眼淚
          我躲在夜裡取笑著黑 因為沒有人能殺死鬼

          是為了什麼而流著血 是為了誰而流眼淚
          我躲在夜裡取笑著黑 因為沒有人能殺死鬼`
        },
        {
          name: "在",
          img: "/img/03_WORKS/歌名/在.png",
          audio: "",
          lyrics: `一樣的天空 卻還是只有錯過
          一樣的歌 還是唱著他多愛她
          一樣快死心 一樣爛的劇情
          卻還是期待著 她嘴裡那句我愛你

          她說 去你媽的花海
          我說 妳這麼說好帥
          她說 要把它們都打敗
          我說 我會一直都在
          我會一直都

          在路燈下 遇見了很像妳的她
          我沒有說話 就算說了也是謊
          沒差 我想都一樣吧
          至少 她嘴裡那句我愛你

          她說 去你媽的花海
          我說 妳這麼說好帥
          她說 要把它們都打敗
          我說 我會一直都在
          我會一直都`
        },
        {
          name: "山海",
          img: "/img/03_WORKS/歌名/山海.png",
          audio: "",
          lyrics: `我看著 天真的我自己
          出現在 沒有我的故事裡
          等待著 我的回應
          一個為何至此 的原因

          他明白 他明白 我給不起
          於是轉身向山裡走去
          他明白 他明白 我給不起
          於是轉身向大海走去

          我聽見那少年的聲音 在還有未來的過去
          渴望著 美好結局
          卻沒能成為自己

          他明白 他明白 我給不起
          於是轉身向山裡走去
          他明白 他明白 我給不起
          於是轉身向大海走去`
        },
        {
          name: "我們",
          img: "/img/03_WORKS/歌名/我們.png",
          audio: "",
          lyrics: `我們在原野上找一面牆
          我們在標籤裡找方向
          我們在廢墟般的垃圾裡找一塊紅磚
          我們在工整的巷子裡找家 找家 找

          我們義無反顧的試著後悔
          我們聲嘶力竭的假裝吶喊
          我們萬分惋惜的浪費著
          用盡一切換來的紙張
          用盡一切換來的紙張
          用盡一切`
        },
        {
          name: "情歌",
          img: "/img/03_WORKS/歌名/情歌.png",
          audio: "",
          lyrics: `別再說讓它去吧 別再說讓它去吧
          別再說讓它去吧 別再說讓它去吧

          殺了它 順便殺了我 拜託你了
          殺了它 順便殺了我 拜託你了

          你說是夢所以才痛 睡醒了再說
          但那挫折和恐懼依舊 但那挫折和恐懼依舊
          我把故鄉給賣了 愛人給騙了
          但那挫折和恐懼依舊 但那挫折和恐懼依舊

          殺了它 順便殺了我 拜託你了
          殺了它 順便殺了我 拜託你了`
        }
      ]
    }
  },
  computed:{
    ...mapState(['scrollTop','news'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
@import "../../sass/_variables.sass"

.pageWorks
  overflow: hidden
  +flex_center
  align-items: flex-end
  background-attachment: fixed
  text-align: left
  line-height: 40px
  li

    display: flex
    .date
      width: 110px

.back_img
  width: 80%
  height: 100vh
  // border-radius: 120px 120px 0px 0px
  // background: url("/img/03_WORKS/UP_00.jpg")
  background-size: cover
  background-position: center bottom
  background-attachment: fixed
  display: flex
  position: absolute

  
  .left_img
    height: 100vh
    // border-radius: 120px 120px 0px 0px
    background: url("/img/03_WORKS/DOWN_00.jpg")
    background-size: 1500px auto
    background-position: center center  
    overflow: hidden




.content
  display: flex
  width: 84%
  align-items: flex-end
  .left
    width: 30%
  .right
    box-sizing: border-box
    width: 70%
    padding-left: 5%


.about_text
  height: 50px
  display: block
  margin-bottom: 20px
  
.right_1
  width: 50%
.right_2
  width: 40%
  margin-top: 30vmin

.col_album
  display: flex
  flex-direction: column

  align-items: center


.album_cover
  width: 200px

.track
  opacity: 0.55
  cursor: pointer
  +trans
  img
    height: 30px
  &.active
    opacity: 1
  
</style>
