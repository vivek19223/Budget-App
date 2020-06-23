import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses'

test('Should set default set',()=>{
    const state = expensesReducer(undefined,{type:'@@INIT'});
    expect(state).toEqual([])
})

test('Should remove expense by id',()=>{
    const action = {
        type : 'REMOVE_EXPENSE',
        id:expenses[1].id
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([expenses[0],expenses[2]])
})

test('Should not remove expense if id not found',()=>{
    const action = {
        type : 'REMOVE_EXPENSE',
        id:'4'
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual(expenses)
})

test('Should add expense',()=>{
    const expense = {
        id: 4,
        description : 'New Item',
        amount : 200,
        createdAt : 10000
    }
    const action = {
        type:'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses,action)
    expect(state).toEqual([...expenses,expense])
})

test('Should edit an expense find by id',()=>{
    const action = {
        type : 'EDIT_EXPENSE',
        id : expenses[1].id,
        updates : {
            description : 'This is new description'
        }
    }
    const state = expensesReducer(expenses,action)
    expect(state.find((expense)=> expenses[1].id === expense.id).description).toBe('This is new description')
})

test('Should not edit an expense if id not matched',()=>{
    const action = {
        type : 'EDIT_EXPENSE',
        id : 4,
        updates : {
            description : 'This is new description'
        }
    }
    const state = expensesReducer(expenses,action)
    expect(state.find((expense)=> expenses[1].id === expense.id).description).toBe('Rent')
})