import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Map from './Map.jsx';

class App extends Component {
	render(){
		return(
				<div>
					<Route exact path="/" component={Home} />
					<Route path="/about" component={About} />
					<Route path="/map" component={Map} />
				</div>
			)
	}
}

export default App;