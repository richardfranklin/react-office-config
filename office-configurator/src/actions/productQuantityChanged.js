import { FETCH_PAGE } from './fetchPage';

export default function productQuantityChanged(categoryIndex, newQuantity) {
	return {
        type: FETCH_PAGE,
        payload: {
            categoryIndex,
            newQuantity
        }
    }
}