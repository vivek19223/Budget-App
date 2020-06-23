import {createStore, combineReducers} from 'redux';
import {v4 as uuid} from 'uuid';

//Create addExpense
const addExpense = (
  {description = '', note = '', amount = 0, createAt = 0} = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid (),
    description,
    note,
    amount,
    createAt,
  },
});

//Create removeExpense
const removeExpense = ({id}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

//Create editExpense
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});

//set TextFilter
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

//set sortByAmount
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

//set sortByDate
const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

//set setStartDate
const setStartDate = (date = undefined) => ({
  type: 'SET_START_DATE',
  date,
});

//set setEndDate
const setEndDate = date => ({
  type: 'SET_END_DATE',
  date,
});

//Default state of expense and filter
const expensesReducerDefaultState = [];
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

//Create expense reducer
const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];

    case 'REMOVE_EXPENSE':
      return state.filter (({id}) => id !== action.id);

    case 'EDIT_EXPENSE':
      return state.map (expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });

    default:
      return state;
  }
};

//Create filter reducer
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text,
      };

    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount',
      };

    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date',
      };

    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.date,
      };

    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.date,
      };

    default:
      return state;
  }
};

//Get visible expenses
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
  return expenses.filter (expense => {
    const startDateMatch =
      typeof startDate !== 'number' || expense.createAt >= startDate;
    const endDateMatch =
      typeof endDate !== 'number' || expense.createAt <= endDate;
    const textMatch = expense.description
      .toLowerCase ()
      .includes (text.toLowerCase ());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b) => {
    if (sortBy === 'date'){
      return a.createAt < b.createAt ? 1 : -1;
    }
    if (sortBy === 'amount'){
      return a.amount < b.amount ? -1 : 1;
    }
  })
};

//Create redux store and combine expense and filter reducers
const store = createStore (
  combineReducers ({
    expenses: expensesReducer,
    filters: filtersReducer,
  })
);

//Subscribe store every time some modification is made
store.subscribe (() => {
  const state = store.getState ();
  const visibleExpenses = getVisibleExpenses (state.expenses, state.filters);
  console.log (visibleExpenses);
});

//Create actions based on type
const expenseOne = store.dispatch (
  addExpense ({description: 'Rent', amount: 300, createAt: -21000})
);
const expenseTwo = store.dispatch (
  addExpense ({description: 'Coffee', amount: 200, createAt: -1000})
);

// store.dispatch (removeExpense ({id: expenseOne.expense.id}));

// store.dispatch (editExpense (expenseTwo.expense.id, {amount: 50}));

// store.dispatch (setTextFilter ('rent'));
// store.dispatch (setTextFilter ('ffee'));

store.dispatch (sortByAmount ());
// store.dispatch (sortByDate ());

// store.dispatch (setStartDate (1250));
// store.dispatch (setStartDate ());
// store.dispatch (setEndDate (-1001));

//This is how our demo state will look
const demoState = {
  expenses: [
    {
      id: 'ahaaaka',
      description: 'January Rent',
      note: 'Final settlement for rent',
      amount: 54500,
      createAt: 0,
    },
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined,
  },
};
