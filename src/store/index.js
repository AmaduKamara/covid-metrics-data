import { createStore, combineReducers, applyMiddleware } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import { covidReducer } from './covid/covid';

const reducer = combineReducers({
  covidReducer,
});

const store = createStore(reducer, applyMiddleware(thunk));

const fetchCovidData = async () => {
  const covidData = await axios.get('https://api.covid19api.com/summary');
  console.log(covidData);
  // const data = await covidData.json();
};

fetchCovidData();

export default store;
