import { FETCH_PAGE } from '../actions/fetchPage';

export default function (state = {}, action) {        
    if (action.type === FETCH_PAGE) {
        return action.payload.data.categories;
    }
    else {
            return state;
    }
}