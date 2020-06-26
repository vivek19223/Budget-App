import React from 'react';
import {shallow} from 'enzyme';
import {EditExpensePage} from '../../components/EditExpensePage';
import expenses from '../fixtures/expenses';

let wrapper, history, startEditExpense, startRemoveExpanse;

beforeEach (() => {
  history = {push: jest.fn ()};
  startEditExpense = jest.fn ();
  startRemoveExpanse = jest.fn ();
  wrapper = shallow (
    <EditExpensePage
      startEditExpense={startEditExpense}
      startRemoveExpanse={startRemoveExpanse}
      history={history}
      expense={expenses[0]}
    />
  );
});

test ('test EditExpensePage correctly', () => {
  expect (wrapper).toMatchSnapshot ();
});

test ('Should Test editExpense correctly', () => {
  wrapper.find ('ExpenseForm').prop ('onSubmit') (expenses[0]);
  expect (history.push).toHaveBeenLastCalledWith ('/');
  expect (startEditExpense).toHaveBeenCalledWith (expenses[0].id, expenses[0]);
});


// test ('Should Test removeExpense correctly', () => {
//     wrapper.find ('button').simulate ('click');
//     expect (history.push).toHaveBeenLastCalledWith ('/');
//     // expect(removeExpense).toHaveBeenLastCalledWith({
//     //     id : expenses[0].id
//     // })
//   });
