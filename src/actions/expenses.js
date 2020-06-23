import {v4 as uuid} from 'uuid';

//Create addExpense
export const addExpense = (
  {description = '', note = '', amount = 0, createdAt = 0} = {}
) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid (),
    description,
    note,
    amount,
    createdAt,
  },
});

//Create removeExpense
export const removeExpense = ({id}) => ({
  type: 'REMOVE_EXPENSE',
  id,
});

//Create editExpense
export const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates,
});
