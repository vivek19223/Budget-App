//import validator from 'validator'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import 'normalize.css/normalize.css';
import './styles/style.scss';
import 'react-dates/lib/css/_datepicker.css';


//actions
import {addExpense} from './actions/expenses';
import {setTextFilter} from './actions/filters';

//selectors
import getVisibileExpenses from './selectors/expenses';
const store = configureStore ();

const waterBill = addExpense ({
  description: 'Water Bill',
  amount: 200,
  createdAt: 20000,
});
const gasBill = addExpense ({
  description: 'Gas Bill',
  amount: 400,
  createdAt: 25000,
});

const Rent = addExpense ({
  description: 'Rent',
  amount: 10400,
  createdAt: 100,
});

store.dispatch (waterBill);
store.dispatch (gasBill);
store.dispatch (Rent);


const state = store.getState ();
const getVisibileExpense = getVisibileExpenses (state.expenses, state.filters);
console.log (getVisibileExpense);

const jsx = (
  <Provider store = { store }>
    <AppRouter />
  </Provider>
)
ReactDOM.render (jsx, document.getElementById ('app'));
