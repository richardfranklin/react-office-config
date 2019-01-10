import axios from 'axios';

export const FETCH_DESKS = 'fetch_desks';
const ROOT_URL = 'http://localhost:4000/desks'

export default function fetchDesks() {
    const request = axios.get(ROOT_URL);

	return {
        type: FETCH_DESKS,
        payload: request
    }
}