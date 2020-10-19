import {combineReducers} from 'redux';
import MainReducer from './MainReducer';
import TshirtReducer from './TshirtReducer';

const rootReducer = combineReducers(
    {
        mainReducer: MainReducer,
        tshirtReducer: TshirtReducer
    }
)

export default rootReducer;