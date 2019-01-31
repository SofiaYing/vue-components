import { shallowMount, mount } from '@vue/test-utils'
import Button from '@/components/button/button.vue'
import chai,{ expect } from 'chai'
import Vue from 'vue'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
chai.use(sinonChai)

describe('Button.vue', () => {
  it('存在.', () => {
    // expect(Button).to.be.ok //button存在
    expect(Button).to.exist
  })
  it('可以设置icon.', () => {
    // const Constructor = Vue.extend(Button)
    // const vm = new Constructor({
    // propsData: {
    //     icon: 'search'
    // }
    // }).$mount()
    const wrapper = mount(Button,{
      propsData: {
        icon: 'search',
      }
    })
    // const useElement = vm.$el.querySelector('use')
    // expect(useElement.getAttribute('xlink:href')).to.equal('#icon-search')
    // vm.$destroy()
    const useElement = wrapper.find('use')
    expect(useElement.attributes().href).to.equal('#icon-search')
  })
  it('可以设置loading.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
    propsData: {
        loading: true
    }
    }).$mount()
    const useElements = vm.$el.querySelectorAll('use')
    expect(useElements.length).to.equal(1)
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#icon-loading')
    vm.$destroy()
  })
  it('设置为loading时,disabled存在.', () => {
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
    propsData: {
      loading: true
    }
    }).$mount()
    console.log(vm.$el.getAttribute('disabled'))
    const useElements = vm.$el.querySelectorAll('use')
    expect(useElements.length).to.equal(1)
    expect(useElements[0].getAttribute('xlink:href')).to.equal('#icon-loading')
    expect(vm.$el.getAttribute('disabled')).to.equal('disabled')
    vm.$destroy()
  })
  //运行在node.js环境下，无法获取样式
  // it('icon 默认的 order 是 1', () => {
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   const Constructor = Vue.extend(Button)
  //   const vm = new Constructor({
  //   propsData: {
  //       icon: 'search',
  //   }
  //   }).$mount(div)
  //   const icon = vm.$el.querySelector('svg')
  //   expect(getComputedStyle(icon).order).to.eq('1')
  //   vm.$el.remove()
  //   vm.$destroy()
  // })
  // it('设置 iconPosition 可以改变 order', () => {
  //   const div = document.createElement('div')
  //   document.body.appendChild(div)
  //   const Constructor = Vue.extend(Button)
  //   const vm = new Constructor({
  //   propsData: {
  //       icon: 'search',
  //       iconPosition: 'right'
  //   }
  //   }).$mount(div)
  //   const icon = vm.$el.querySelector('svg')
  //   expect(getComputedStyle(icon).order).to.eq('2')
  //   vm.$el.remove()
  //   vm.$destroy()
  // })
  it('点击 button 触发 click 事件', () => {
    // const Constructor = Vue.extend(Button)
    // const vm = new Constructor({
    // propsData: {
    //     icon: 'search',
    // }
    // }).$mount()

    const wrapper = mount(Button)
    const vm = wrapper.vm
    //sinon库中，fake假函数，知道自己是否被调用，以及所传参数
    const callback = sinon.fake();
    vm.$on('click', callback)
    vm.$el.click()
    expect(callback).to.have.been.called
    vm.$destroy()
  })
})