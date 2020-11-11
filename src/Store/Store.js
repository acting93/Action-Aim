import { createStore } from 'redux';
import rootReducer from '../ReducersRedux/combineReducer';

const store = createStore(rootReducer);

export default store;
