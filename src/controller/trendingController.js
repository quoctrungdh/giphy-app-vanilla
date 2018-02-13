import api from '../api'
import * as view from '../view/trendingView'

function fetchAndRenderTrendingGifs() {
	api
		.trending({
			limit: 12
		})
		.then(
			({data}) => { view.renderTrendingGifs(data) }, // render
			error => { console.error('Error in fetching trending', error) }
		)
}

export function renderScreen() {
	fetchAndRenderTrendingGifs();
}

