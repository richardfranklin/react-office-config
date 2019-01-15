import { FETCH_PAGE } from '../actions/fetchPage';

export default function (state = {}, action, root) {
    if (action.type === FETCH_PAGE) {

        if (action.payload.data && action.payload.data.hasOwnProperty('categories')) {
            return action.payload.data.categories;
        } 
        else if (action.payload.hasOwnProperty('newQuantity') ) {
            const rootCategories = [ ...root.categories ];
            const categoryIndex = action.payload.categoryIndex;
            const newQuantity = action.payload.newQuantity;

            rootCategories[categoryIndex].quantity = newQuantity;
            return rootCategories;
        }
        else {
            const rootCategories = [ ...root.categories ];
            const categoryIndex = action.payload.categoryIndex;
            const alternativeIndex = action.payload.alternativeindex;
            const alternative = action.payload.alternative;
            const previouslySelected = rootCategories[categoryIndex].product;
            
            // Change current selected product to be the clicked alternative
            rootCategories[categoryIndex].product = alternative;

            // Change previous 'alternative' product to be the previously selected product (swap the products)
            rootCategories[categoryIndex].alternatives[alternativeIndex] = previouslySelected;

            return rootCategories;
        }
        
    }
    else {
        return state;
    }
}