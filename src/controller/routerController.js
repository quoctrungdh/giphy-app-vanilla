import history from '../history';

import * as trendingController from './trendingController';

const controllersByPath = {
	'/trending': trendingController
}

const { location } = history;

export function init() {
	let oldPathname;

	history.listen(({pathname}) => {
		if(pathname !== oldPathname) {
			if(controllersByPath[pathname]) {
				controllersByPath[pathname].renderScreen();
			}
			oldPathname = pathname;
		}
	});

	// console.log(controllersByPath, location.pathname)

	if(controllersByPath[location.pathname]) {
		controllersByPath[location.pathname].renderScreen();
	}
}
