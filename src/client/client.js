import ReactDOM from 'react-dom';

import './client.scss';


function main() {
	const routes = require('./routes').default();
	ReactDOM.render(routes, document.getElementById("mount"));
}

main();

if (module.hot) {
	module.hot.accept("./routes", () => {
		main();
	});
}
