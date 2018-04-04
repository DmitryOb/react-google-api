import React, { Component } from 'react';
import styles from '../style.css';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';

class Map extends Component{

	loadScript(){
		function new_script(src) {
			return new Promise(function(resolve, reject){
				var script = document.createElement('script');
				script.src = src;
				script.addEventListener('load', function () {
					resolve();
				});
				script.addEventListener('error', function (e) {
					reject(e);
				});
				document.body.appendChild(script);
			})
		};
		var myurl = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDNsBNcJ5fQsyPZrrQRxG30k0v3fgio-vs';
		var my_script = new_script(myurl);
		my_script.then(
			()=>{
				this.initMap();
			}
		)
	}

	initMap() {
		var map = new google.maps.Map(document.getElementById('map'), {
			zoom: 7,
			center: {lat: 55.483752, lng: 38.153539}
		});
		var ourindex;
		var position = this.props.state.map((e,i)=>{
			if (typeof(e.longitude) === 'number'){
				return ({ lat: e.latitude, lng: e.longitude })
			}
			else {ourindex = i;}
		})
		position.splice(ourindex, 1);
		var markers = position.map(function(e, i) {
			var marker = new google.maps.Marker({
				position: e,
				map: map
			});
			marker.addListener('click', ()=> new google.maps.InfoWindow({
				content: '<h1>Hey there!</h1>'
			}).open(map, marker));
			return marker;
		});
		var markerCluster = new MarkerClusterer(
			map, 
			markers,
			{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'}
		);
	};

	componentDidMount(){
		this.loadScript();
	}

	render() {
		return (
			<div>
				<NavLink to="/" className={styles.prev}>Home</NavLink>
				<hr/>
				<div id='map' className={styles.map}></div>
			</div>
		);
	}

}

Map = connect( (state)=>{ return {state} })(Map);

export default Map;