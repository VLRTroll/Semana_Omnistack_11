import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Logon from './pages/Logon';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewInicident from './pages/NewInicident';

export default function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Logon} />
				<Route path='/register' component={Register} />

				<Route path='/profile' component={Profile} />
				<Route path='/incidents/new' component={NewInicident} />
			</Switch>
		</BrowserRouter>
	);
}
