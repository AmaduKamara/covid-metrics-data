import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import covidReducer, { fetchCovidResults } from './covid/covid';

const reducer = combineReducers({
  covidReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

const fetchCovidData = async () => {
  const covidData = await axios.get('https://api.covid19api.com/summary');
  const data = await covidData.data;
  store.dispatch(fetchCovidResults(data));
};

fetchCovidData();

export default store;
