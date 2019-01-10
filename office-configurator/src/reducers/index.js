import { combineReducers } from 'redux';
import desksReducer from './desksReducer';

const rootReducer = combineReducers({
	desks: desksReducer
});

export default rootReducer;