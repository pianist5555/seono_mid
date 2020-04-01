import { combineReducers } from "redux";
import counter from './counter.js';
import sample from './sample.js';

const rootReducer = combineReducers({
    counter,
    sample
});

export default rootReducer;