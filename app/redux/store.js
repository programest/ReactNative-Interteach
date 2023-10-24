import { createStore } from 'redux';
import { Provider } from 'react-redux';
import {composeWithDevTools} from 'redux-devtools-extension'

import rootReducer from './reducers';

const store = createStore(rootReducer, composeWithDevTools());

export default store;