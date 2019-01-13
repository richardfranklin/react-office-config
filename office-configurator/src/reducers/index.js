import { combineReducers } from 'redux';
import categoriesReducer from './categoriesReducer';
import { nameReducer, descriptionReducer, numberOfEmployeesReducer } from './pageInfoReducer';

const rootReducer = combineReducers({
	categories: categoriesReducer,
	name: nameReducer,
	description: descriptionReducer,
	numberOfEmployees: numberOfEmployeesReducer
});

export default rootReducer;