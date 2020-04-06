import { combineReducers } from "redux";
import counter from './counter.js';
import sample from './sample.js';
import loading from './loading.js';

const rootReducer = combineReducers({
    counter,
    sample,
    loading
});
 
export default rootReducer;