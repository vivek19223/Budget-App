import React from 'react';
import {Link} from 'react-router-dom';
import ExpenseTotal from '../selectors/expense-total';
import {connect} from 'react-redux';
import selectExpenses from '../selectors/expenses';
import numeral from 'numeral';


export const ExpensesSummary = props => {
  const total = numeral (ExpenseTotal (props.expenses)).format ('0,0');
  return (
    <div className="page-header">
      <div className="content-container">
        {props.expenses.length > 1
          ? <h1 className="page-header__title">
              Viewing
              {' '}
              <span>{props.expenses.length}</span>
              {' '}
              expenses totalling
              {' '}
              <span>{total}</span>
            </h1>
          : props.expenses.length === 1 &&
              <h1 className="page-header__title">
                Viewing
                {' '}
                <span>{props.expenses.length}</span>
                {' '}
                expense totalling
                {' '}
                <span>{total}{' '}</span>
              </h1>}

              <div className="page-header__actions">
                <Link className="button" to = '/create'>Add Expense</Link>
              </div>

      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    expenses: selectExpenses (state.expenses, state.filters),
  };
};
export default connect (mapStateToProps) (ExpensesSummary);
