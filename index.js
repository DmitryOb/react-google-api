import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './configureStore';
import Root from './components/Root.jsx';

const store = configureStore();

render(
	<Root store={store}/>,
	document.getElementById('root')
);