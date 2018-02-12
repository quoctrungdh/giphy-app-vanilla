export function hasInParents(el, selector) {
	if(el !== document && el.matches(selector)) {
		return true;
	}

	if(el.parentNode) {
		return hasInParents(el.parentNode, selector);
	}

	return false;
}