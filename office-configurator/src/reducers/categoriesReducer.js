import { FETCH_PAGE } from '../actions/fetchCategories';

export default function (state = {}, action) {        
    if (action.type === FETCH_PAGE) {
        return action.payload.data.categories;
    }
    else {
            return state;
    }
}