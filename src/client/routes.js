import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';
import App from './components/app';
import Lobby from './components/lobby';
import Game from './components/game';

export default () => {
	return (
		<Route path="/" component={App}>
			<IndexRoute components={Lobby} />
			<Route path="/game/:gameId" components={Game} />
			<Redirect from="*" to="/" />
		</Route>
	);
};
