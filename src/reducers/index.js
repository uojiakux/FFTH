import counter from './counter';
import islogged from './islogged';
import { combineReducers } from 'redux';

const allReducers = combineReducers({
    counter: counter,
    islogged: islogged
})

export default allReducers;