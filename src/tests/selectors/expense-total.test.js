import expenses from '../fixtures/expenses'
import selectExpensesTotal from '../../selectors/expense-total'

test('Should check total correctly if no expense found',()=>{
    const val = selectExpensesTotal([])
    expect(val).toBe(0)
})

test('Should check total correctly if single expense found',()=>{
    const val = selectExpensesTotal([expenses[0]])
    expect(val).toBe(11195)
})

test('Should check total correctly if multiple expense found',()=>{
    const val = selectExpensesTotal(expenses)
    expect(val).toBe(210695)
})