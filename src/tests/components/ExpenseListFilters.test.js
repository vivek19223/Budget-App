import React from 'react';
import {shallow} from 'enzyme';
import moment from 'moment';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altfilters} from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach (() => {
  setTextFilter = jest.fn ();
  sortByDate = jest.fn ();
  sortByAmount = jest.fn ();
  setStartDate = jest.fn ();
  setEndDate = jest.fn ();
  wrapper = shallow (
    <ExpenseListFilters
      filters={filters}
      setStartDate={setStartDate}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setEndDate={setEndDate}
    />
  );
});

test ('Should render ExpenseListFilters correctly', () => {
  expect (wrapper).toMatchSnapshot ();
});

test ('Should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters : altfilters
    })
    expect (wrapper).toMatchSnapshot ();
  });

test('Should handle textFilter',()=>{
    wrapper.find('input').simulate('change',{
        target:{
            value : 'card'
        }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith('card')
})

test('Should handle textFilter',()=>{
    wrapper.setProps({
        filters : altfilters
    })
    wrapper.find('select').simulate('change',{
        target:{
            value : 'date'
        }
    })
    expect(sortByDate).toHaveBeenLastCalledWith()
})

test('Should handle sortByAmount',()=>{
    wrapper.find('select').simulate('change',{
        target:{
            value : 'amount'
        }
    })
    expect(sortByAmount).toHaveBeenLastCalledWith()
})

test('Should handle sortByDate',()=>{
    wrapper.find('select').simulate('change',{
        target:{
            value : 'amount'
        }
    })
    expect(sortByAmount).toHaveBeenLastCalledWith()
})

test('Should handle date change',()=>{
    const startDate = moment(0).add(4,'years')
    const endDate = moment(0).add(8,'years')
    wrapper.find('DateRangePicker').prop('onDatesChange')( {startDate,endDate} )
    expect(setStartDate).toHaveBeenLastCalledWith(startDate)
    expect(setEndDate).toHaveBeenLastCalledWith(endDate)
})

test('Should handle date focus',()=>{
    const calendarFocused = 'endDate'
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused )
    expect(wrapper.state('calenderFocused')).toBe(calendarFocused)
})
  