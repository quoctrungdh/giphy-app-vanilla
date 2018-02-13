export function renderGifs(container, gifs) {
	// clear old data
	console.log(container, gifs)
	const $wrapper = document.createElement('div');
	$wrapper.classList.add('gifs');
	container.appendChild($wrapper);

	const $grid = document.createElement('div');
	$grid.classList.add('gifs__gird');
	$wrapper.appendChild($grid);

	gifs.map(gif => {
		const $img = document.createElement('img')
		$img.src = gif.images['480w_still'].url;
		$grid.appendChild($img)

		// TODO: continue here
	})
}

export function hasInParents(el, selector) {
	if(el !== document && el.matches(selector)) {
		return true;
	}

	if(el.parentNode) {
		return hasInParents(el.parentNode, selector);
	}

	return false;
}