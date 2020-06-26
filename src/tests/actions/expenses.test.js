import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense,addExpense, editExpense, removeExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase'

const createMockStore = configureMockStore ([thunk]);

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
  const action = addExpense (expenses[0]);

  expect (action).toEqual ({
    type: 'ADD_EXPENSE',
    expense: expenses[0],
  });
});

test('should add expense to database and store',async ()=>{
  const store = createMockStore({});
  const expenseData = {
    description : 'Mouse',
    amount : 300,
    note : 'This is better',
    createdAt : 1000
  }
   await store.dispatch(startAddExpense(expenseData))
   const data =  store.getActions()
   expect(data[0]).toEqual({
     type: 'ADD_EXPENSE',
     expense : {
       id : expect.any(String),
       ...expenseData
     }
   })
   const snapshot = await database.ref(`expenses/${data[0].expense.id}`).once('value')
   expect(snapshot.val()).toEqual(expenseData)

})

test('should add expense with defaults to database and store',async ()=>{
  const store = createMockStore({});
  const expenseData = {
    description : '',
    amount : 0,
    note : '',
    createdAt : 0
  }
   await store.dispatch(startAddExpense({}))
   const data =  store.getActions()
   expect(data[0]).toEqual({
     type: 'ADD_EXPENSE',
     expense : {
       id : expect.any(String),
       ...expenseData
     }
   })
   const snapshot = await database.ref(`expenses/${data[0].expense.id}`).once('value')
   expect(snapshot.val()).toEqual(expenseData)

})

// test ('should setup add expense action object with default value', () => {
//   const expense = addExpense ({});

//   expect (expense).toEqual ({
//     type: 'ADD_EXPENSE',
//     expense: {
//       id: expect.any (String),
//       description: '',
//       amount: 0,
//       note: '',
//       createdAt: 0,
//     },
//   });
// });
