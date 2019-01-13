import axios from 'axios';

export const FETCH_PAGE = 'fetch_page';
const ROOT_URL = 'http://localhost:4000/homeoffice'

export default function fetchPage() {
    const request = axios.get(ROOT_URL);

	return {
        type: FETCH_PAGE,
        payload: request
    }
}