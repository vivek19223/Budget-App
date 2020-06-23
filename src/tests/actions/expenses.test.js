import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

test ('should setup remove expense action object', () => {
  const action = removeExpense ({id: '123abc'});

  expect (action).toEqual ({
    type: 'REMOVE_EXPENSE',
    id: '123abc',
  });
});

test ('should setup edit expense action object', () => {
  const action = editExpense ('123abc', {note: 'abc'});

  expect (action).toEqual ({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'abc',
    },
  });
});

test ('should setup add expense action object with provided value', () => {
  const action = addExpense ({
    id: 'abc123',
    description: 'coffee',
    note: 'hot coffee',
    amount: 100,
    createdAt: 123,
  });

  expect (action).toEqual ({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any (String),
      description: 'coffee',
      note: 'hot coffee',
      amount: 100,
      createdAt: 123,
    },
  });
});

test ('should setup add expense action object with provided value', () => {
  const expense = addExpense ({});

  expect (expense).toEqual ({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any (String),
      description: '',
      amount: 0,
      note: '',
      createdAt: 0,
    },
  });
});
