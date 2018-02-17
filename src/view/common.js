const columns = 4;
const gutters = columns - 1;
const gutterWidth = 10;

export function renderGifs(container, gifs) {
	container.innerHTML = '';

	const $wrapper = document.createElement('div');
	$wrapper.classList.add('gifs');
	container.appendChild($wrapper);

	const $grid = document.createElement('div');
	$grid.classList.add('gifs__grid');
	$wrapper.appendChild($grid);

	const { width } = $grid.getBoundingClientRect();
	const columnWidth = width / columns - gutterWidth * gutters / columns;

	gifs.map(renderGif(columnWidth)).forEach(element => $grid.appendChild(element));

	// TODO: handle page scroll
}

const renderGif = width => gif => {
	const { images: { fixed_width: image, original } } = gif;

	const $gifWrapper = document.createElement('div');
	$gifWrapper.gif = gif;
	$gifWrapper.dataset.original_url = original.url;
	$gifWrapper.classList.add('gif');

	$gifWrapper.draw = w => {
		const imgHeight = image.height / image.width * w;
		$gifWrapper.style.height = `${imgHeight}px`;
		$gifWrapper.style.width = `${w}px`;
	}
	$gifWrapper.draw(width);

	const $gifImage = document.createElement('img');
	$gifImage.addEventListener('load', onGifLoaded)
	$gifImage.classList.add('gif__image');
	$gifImage.src = image.url;
	$gifWrapper.appendChild($gifImage);

	return $gifWrapper;
}

function onGifLoaded({ target }) {
	target.style.visibility = 'visible';
	renderActionLayer(target.parentNode);
}

function renderActionLayer($gif) {
	const $layer = document.createElement('div');
	$layer.classList.add('gif__action-layer');
	$gif.appendChild($layer);

	const $actions = document.createElement('div');
	$actions.classList.add('gif__actions');
	$layer.appendChild($actions);

	// TODO: optimize font icons
	const $copyAction = document.createElement('span');
	$copyAction.classList.add('gif__action', 'gif__action__copy', 'far', 'fa-copy')
	$actions.appendChild($copyAction)

	const $favoriteAction = document.createElement('span');
	$favoriteAction.classList.add('gif__action', 'gif__action__favorite', 'far', 'fa-heart')
	$actions.appendChild($favoriteAction);
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