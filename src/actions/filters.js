//set TextFilter
export const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text,
});

//set sortByAmount
export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

//set sortByDate
export const sortByDate = () => ({
  type: 'SORT_BY_DATE',
});

//set setStartDate
export const setStartDate = (date = undefined) => ({
  type: 'SET_START_DATE',
  date,
});

//set setEndDate
export const setEndDate = date => ({
  type: 'SET_END_DATE',
  date,
});
