import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import covidReducer from './covid/covid';

const reducer = combineReducers({
  covidReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
