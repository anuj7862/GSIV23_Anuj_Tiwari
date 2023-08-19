import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'; // Install this middleware using npm or yarn
import rootReducer from './reducer'; // Create this file in the next step

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;