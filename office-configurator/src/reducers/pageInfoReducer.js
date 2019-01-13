import { FETCH_PAGE } from '../actions/fetchPage';

export function nameReducer (state = {}, action) {        
    if (action.type === FETCH_PAGE && action.payload.hasOwnProperty('data')) {
        return action.payload.data.name;
    }
    else {
            return state;
    }
}

export function descriptionReducer (state = {}, action) {        
    if (action.type === FETCH_PAGE && action.payload.hasOwnProperty('data')) {
        return action.payload.data.description;
    }
    else {
            return state;
    }
}

export function numberOfEmployeesReducer (state = {}, action) {        
    if (action.type === FETCH_PAGE && action.payload.hasOwnProperty('data')) {
        return action.payload.data.numberOfEmployees;
    }
    else {
            return state;
    }
}