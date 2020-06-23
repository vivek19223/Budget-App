import moment from 'moment';
import filterReducer from '../../reducers/filters'


const filtersReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month'),
  };

  test('Should setup default filter values',()=>{
      const state = filterReducer(undefined,{type:'@@INIT'})
      expect(state).toEqual({...filtersReducerDefaultState})
  })

  test('Should set sortBy to amount',()=>{
      const state = filterReducer(undefined,{ type : 'SORT_BY_AMOUNT'})
      expect(state.sortBy).toBe('amount')
  })

  test('Should set sortBy to date',()=>{
      const currentState = {
          text : '',
          startDate : undefined,
          endDate : undefined,
          sortBy : 'amount'
      }
      const state = filterReducer(currentState,{ type : 'SORT_BY_DATE'})
      expect(state.sortBy).toBe('date')
  })

  test('Should set setText filter',()=>{
      const action = { type : 'SET_TEXT_FILTER',text:'something'}
      const state = filterReducer(undefined,action)
      expect(state.text).toBe('something')
  })

  test('Should set start date filter',()=>{
    const action = { type : 'SET_START_DATE',date:moment(0).add(2,'days')}
    const state = filterReducer(undefined,action)
    expect(state.startDate).toEqual(moment(0).add(2,'days'))
})

test('Should set end date filter',()=>{
    const action = { type : 'SET_END_DATE',date:moment(0).add(4,'days')}
    const state = filterReducer(undefined,action)
    expect(state.endDate).toEqual(moment(0).add(4,'days'))
})