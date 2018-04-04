import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './App.jsx';

const Root = ({ store }) => (
	<Provider store={store}>
		<Router>
			<Route path="/:url?" component={App}/>
		</Router>
	</Provider>
);

export default Root;