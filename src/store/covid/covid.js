import axios from 'axios';

const FETCH_COVID_DATA = 'covid/FETCH_COVID_DATA';

// App initial state
const initialState = {
  covidData: [],
};

// Actions
export const fetchCovidData = (payload) => ({
  type: FETCH_COVID_DATA,
  payload,
});

export const fetchCovid = () => async (dispatch) => {
  const covidData = await axios.get('https://api.covid19api.com/summary');
  const data = await covidData.data;
  dispatch(fetchCovidData(data.Countries));
};

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
