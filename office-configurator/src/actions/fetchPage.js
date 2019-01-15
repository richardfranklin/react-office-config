import axios from 'axios';

export const FETCH_PAGE = 'fetch_page';


export default function fetchPage(noOfEmployees, profile) {
    const currentNoOfEmployees = `${noOfEmployees}` || '';
    const currentProfile = `${profile}/` || '';

    const request = axios.get(`http://10.133.92.13:8080/search/${currentProfile}popular?numberOfEmployees=${currentNoOfEmployees}`);

	return {
        type: FETCH_PAGE,
        payload: request
    }
}