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
import spies from 'chai-spies'
chai.use(spies)
const expect = chai.expect

{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon: 'search'
    }
  })
  // vm.$mount('#test')
  vm.$mount() //直接挂载到内存
  let useElement = vm.$el.querySelector('use')
  console.log(useElement)
  expect(useElement.getAttribute('xlink:href')).to.eq('#icon-search')
  //清内存
  vm.$el.remove()
  vm.$destroy()
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon: 'loading'
    }
  })
  vm.$mount()
  let useElement = vm.$el.querySelector('use')
  expect(useElement.getAttribute('xlink:href')).to.eq('#icon-loading')
  vm.$el.remove()
  vm.$destroy()
}
{
  //挂载到元素上才会进行渲染
  const div = document.createElement('div')
  document.body.appendChild(div)

  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon: 'search'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('1')  //CSS属性为字符串
  vm.$el.remove()
  vm.$destroy()
}
{
  const div = document.createElement('div')
  document.body.appendChild(div)
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon: 'search',
      iconPosition: 'right'
    }
  })
  vm.$mount(div)
  let svg = vm.$el.querySelector('svg')
  let {order} = window.getComputedStyle(svg)
  expect(order).to.eq('2') 
  vm.$el.remove()
  vm.$destroy() 
}
{
  const Constructor = Vue.extend(Button)
  const vm = new Constructor({
    propsData:{
      icon: 'search',
    }
  })
  vm.$mount()
  //mock,希望某些行为是受控的，而非使用真正的函数
  let spy = chai.spy(function(){})
  
  // vm.$on('click',function(){
  //   // console.log('1')
  //   expect(1).to.equal(1)  //期望这个函数被执行，但是不该如此做
  // })

  vm.$on('click',spy)

  let button = vm.$el
  button.click()
  expect(spy).to.have.been.called()

  vm.$el.remove()
  vm.$destroy() 
}