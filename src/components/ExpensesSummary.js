import React from 'react';
import ExpenseTotal from '../selectors/expense-total';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral'

export const ExpensesSummary = props => {
    const total = numeral(ExpenseTotal (props.expenses)).format('0,0')
    return (
        <div>
            {props.expenses.length > 1
            ? <h1>Viewing {props.expenses.length} expenses totalling {total}</h1>
            : props.expenses.length === 1 &&
             <h1>Viewing {props.expenses.length} expense totalling {total} </h1>}
        </div>
    )
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses (state.expenses, state.filters),
  };
};
export default connect (mapStateToProps) (ExpensesSummary);
