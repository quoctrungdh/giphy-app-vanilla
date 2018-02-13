// import common gifs render
import { renderGifs } from './common';
// selector

const $container = document.querySelector('.trending');

export function renderTrendingGifs(gifs) {
	renderGifs($container, gifs);
}