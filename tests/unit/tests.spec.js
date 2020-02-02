import Vue from 'vue'
import App from '../../src/App.vue';
// import { shallowMount } from '@vue/test-utils'
// import Brothers from './src/components/Brothers.vue';
// import ChatBox from './src/components/ChatBox.vue';
import ChatLine from '../../src/components/ChatLine.vue';
// import ChatView from './src/components/ChatView.vue';
// import Header from './src/components/Header.vue';

// TESTING APP

describe('App', () => {

  it('has a created hook', () => {
    expect(typeof App.created).toBe('function')
  })

  it('sets the correct default data', () => {
    expect(typeof App.data).toBe('function')
    const defaultData = App.data()
    expect(defaultData.brotherChosen).toBe(false);
  })

});

// TESTING ChatLine

describe('ChatLine', () => {

  it('sets the correct default data', () => {
    expect(typeof ChatLine.data).toBe('function')
    const defaultData = ChatLine.data()
    expect(defaultData.message).toBe('');
  })

  //TEST FOR PROPER MESSAGE BEING PASSED TO ADD MESSAGE

  //TEST FOR CORRECT VALUES IN OBJECT BEING SHIPPED TO EVENT BUS

});