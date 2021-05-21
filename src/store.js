import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';

import reducer from './reducers';

const store = createStore(reducer, applyMiddleware(thunk, reduxLogger));


export default store;