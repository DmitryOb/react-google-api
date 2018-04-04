import React, { Component } from 'react';
import styles from '../style.css';
import { NavLink } from 'react-router-dom';

class About extends Component {
	render(){
		return(
			<div>
				<NavLink to="/" className={styles.prev}>Home</NavLink>
				<h1>About</h1>
				<h3>Heading</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, vel. 
				Incidunt ratione sequi magni ipsum! Earum aperiam ut esse, incidunt deserunt 
				optio itaque rem quia officia aspernatur, nobis vitae ad</p>
				<h3>Heading</h3>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa, vel. 
				Incidunt ratione sequi magni ipsum! Earum aperiam ut esse, incidunt deserunt 
				optio itaque rem quia officia aspernatur, nobis vitae ad</p>
			</div>
		)
	}
}

export default About;