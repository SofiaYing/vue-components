import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Button from './components/button/button'

Vue.config.productionTip = false

Vue.component('c-button',Button)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

//单元测试
//每个输入参数，事件
import chai from 'chai'
const expect = chai.expect
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon: 'search'
    }
  })
  // button.$mount('#test')
  button.$mount() //直接挂载到内存
  let useElement = button.$el.querySelector('use')
  console.log(useElement)
  expect(useElement.getAttribute('xlink:href')).to.eq('#icon-search')
}
{
  const Constructor = Vue.extend(Button)
  const button = new Constructor({
    propsData:{
      icon: 'loading'
    }
  })
  button.$mount()
  let useElement = button.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#icon-loading')
}