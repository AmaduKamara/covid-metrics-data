const FETCH_COVID_DATA = 'covid/FETCH_COVID_DATA';

// App initial state
const initialState = {
  covidData: [],
};

// Actions
export const fetchCovidResults = (payload) => ({
  type: 'FETCH_COVID_DATA',
  payload,
});

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COVID_DATA:
      return { ...state, covidData: action.payload };
    default:
      return state;
  }
};

export default reducer;
