import categoriesReducer from './categoriesReducer';
import { nameReducer, descriptionReducer, numberOfEmployeesReducer } from './pageInfoReducer';

const rootReducer = (state = {}, action) => {
	return {
		categories: categoriesReducer(state.categories, action, state),
		name: nameReducer(state.name, action, state),
		description: descriptionReducer(state.description, action, state),
		numberOfEmployees: numberOfEmployeesReducer(state.numberOfEmployees, action, state)
	};
  };

export default rootReducer;