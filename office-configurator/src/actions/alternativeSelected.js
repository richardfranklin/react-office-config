export default function alternativeSelected(categoryIndex, alternativeindex, alternative) {
	return {
        type: 'fetch_page',
        payload: {
            categoryIndex,
            alternativeindex,
            alternative
        }
    }
}