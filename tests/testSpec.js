// Import Vue and the component being tested
import Vue from 'vue'
import fullPageComponent from '../resources/assets/js/components/fullPage.vue'
// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe("temp",()=>{
  it("is working",()=>{
    expect(1).toBe(1)
  })
})

function getRenderedComp (Component, propsData) {
  const Ctor = Vue.extend(Component)
  const vm = new Ctor({ propsData: propsData }).$mount()
  return vm
}

describe('fullPageComponent', () => {
  // Inspect the raw component options
  it('has a mounted hook', () => {
    expect(typeof fullPageComponent.mounted).toBe('function')
  })
  // Evaluate the results of functions in
  // the raw component options
  it('sets the correct default open', () => {
    
    expect(typeof fullPageComponent.data).toBe('function')
    const defaultData = fullPageComponent.data()
    expect(defaultData.full).toBe(false)

    // expect(defaultData.message).toBe('hello!')
  })

  it('is default opened', () => {
    expect(getRenderedComp(fullPageComponent, {
      status: true
    }).$data.full).toBe(true)
  })

  // it('can trigger open by clicking cross', done => {
  //   const vm = getRenderedComp(fullPageComponent,{})
  //   vm.ended()
  //   Vue.nextTick(() => {
  //     expect(vm.data.status).toBe(false)
  //     done()
  //   })
  // })
  
  // // Inspect the component instance on mount
  // it('can trigger open by clicking cross', () => {
  //   const vm = new Vue(fullPageComponent).$mount()

  //   expect(vm.message).toBe('bye!')
  // })
  // // Mount an instance and inspect the render output
  // it('renders the correct message', () => {
  //   const Ctor = Vue.extend(fullPageComponent)
  //   const vm = new Ctor().$mount()
  //   expect(vm.$el.textContent).toBe('bye!')
  // })
}) 