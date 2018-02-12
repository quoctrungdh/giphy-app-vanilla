import history from '../history';
import initRouter from './routerView';
import { hasInParents } from './common'

export default () => {

	/**
	 * Intercept clicks on links and do history pushState
	 * instead of be redirected
	 */

	document.addEventListener('click', evt => {
		console.log(evt)
		if(hasInParents(evt.target, 'a')) {
			evt.preventDefault();
			history.push(evt.target.getAttribute('href'));
		}
	})

	initRouter();
}