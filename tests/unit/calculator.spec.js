import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {
  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })
})

describe('App.vue', () => {
  it('adds two numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1');
    expect(wrapper.vm.runningTotal).to.equal(5)
  })
})

describe('App.vue', () => {
  it('subtracts two numbers ', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })
})
describe('App.vue', () => {
  it('multiplies two numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  })
})
describe('App.vue', () => {
  it('divides two numbers', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })
})
describe('App.vue', () => {
  it('concatenates multiple number button clicks', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick('4');
    wrapper.vm.numberClick('3');
    wrapper.vm.numberClick('4');
    expect(wrapper.vm.runningTotal).to.equal(434)
  })
})
describe('App.vue', () => {
  it('chains multiple operations together', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 0
    wrapper.vm.numberClick('4');
    wrapper.vm.operatorClick('*');
    wrapper.vm.numberClick('2');
    wrapper.vm.operatorClick('+');
    wrapper.vm.numberClick('2');
    wrapper.vm.operatorClick('-');
    wrapper.vm.numberClick('2');
    wrapper.vm.operatorClick('/');
    wrapper.vm.numberClick('2');
    wrapper.vm.operatorClick('=');
    expect(wrapper.vm.runningTotal).to.equal(4)
  })
})
describe('App.vue', () => {
  it('clears the running total without affecting the calculation', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick('4');
    wrapper.vm.operatorClick('*');
    wrapper.vm.numberClick('2');
    wrapper.vm.clearClick();
    expect(wrapper.vm.runningTotal).to.equal(0)
  })
})