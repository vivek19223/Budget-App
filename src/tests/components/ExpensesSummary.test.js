import React from 'react';
import expenses from '../fixtures/expenses';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import {shallow} from 'enzyme';

test ('Test ExpensesSummery Correctly for 1 expense', () => {
  const wrapper = shallow (<ExpensesSummary expenses={[expenses[0]]} />);
  expect (wrapper).toMatchSnapshot ();
});

test ('Test ExpensesSummery with multiple expense correctly Correctly', () => {
  const wrapper = shallow (<ExpensesSummary expenses={expenses} />);
  expect (wrapper).toMatchSnapshot ();
});
