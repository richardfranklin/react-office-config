import { FETCH_DESKS } from '../actions/fetchDesks';

export default function (state = {}, action) {        
    if (action.type === FETCH_DESKS) {
        return action.payload.data;
    }
    else {
            return state;
    }
}