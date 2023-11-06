import React from 'react';
import { shallow } from 'enzyme';
import Notifications from './Notifications';

// Test case 1: Notifications renders without crashing
test('Notifications renders without crashing', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.exists()).toBe(true);
});

// Test case 2: Notifications renders three list items
test('Notifications renders three list items', () => {
  const wrapper = shallow(<Notifications />);
  const listItems = wrapper.find('li');
  expect(listItems.length).toBe(3);
});

// Test case 3: Notifications renders the text "Here is the list of notifications"
test('Notifications renders the text "Here is the list of notifications"', () => {
  const wrapper = shallow(<Notifications />);
  const textContent = wrapper.text();
  expect(textContent).toContain('Here is the list of notifications');
});
