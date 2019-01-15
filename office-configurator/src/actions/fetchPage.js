import axios from 'axios';

export const FETCH_PAGE = 'fetch_page';
const ROOT_URL = 'http://10.133.92.13:8088/search/office/popular';

export default function fetchPage() {
    const request = axios.get(ROOT_URL);

	return {
        type: FETCH_PAGE,
        payload: request
    }
}