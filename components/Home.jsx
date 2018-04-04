import React, { Component } from 'react';
import styles from '../style.css';
import { NavLink } from 'react-router-dom';

class Home extends Component {
	render(){
		return(
			<div>
				<div className={styles.home}>
					<h2>Welcome to the best reality service</h2>
				</div>
				<header>
					<NavLink to="/map">
						<button className={styles.home}>Map</button>
					</NavLink>
					<NavLink to="/about">
						<button className={styles.home}>About</button>
					</NavLink>
				</header>
			</div>
		)
	}
}

export default Home;