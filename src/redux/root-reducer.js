import {combineReducers} from 'redux'
import basketReducer from './reducer'


const rootReducer =combineReducers ({
    data:basketReducer,    // here i will acess latest application state with help of this data key
});

export default rootReducer;