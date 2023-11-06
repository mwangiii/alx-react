import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

// Test case 1: App renders without crashing
test('App renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists()).toBe(true);
});

// Test case 2: App renders a div with the class App-header
test('App renders a div with the class App-header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-header').exists()).toBe(true);
});

// Test case 3: App renders a div with the class App-body
test('App renders a div with the class App-body', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-body').exists()).toBe(true);
});

// Test case 4: App renders a div with the class App-footer
test('App renders a div with the class App-footer', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-footer').exists()).toBe(true);
});
