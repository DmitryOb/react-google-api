import React, { Component } from 'react';
import styles from '../style.css';
import { NavLink } from 'react-router-dom';
import { withGoogleMap, GoogleMap, Marker} from "react-google-maps";
import { connect } from 'react-redux';

class Map extends Component{
	render(){
		var ourindex;
		var position = this.props.state.map((e,i)=>{
			if (typeof(e.longitude) === 'number'){
				return ({ lat: e.latitude, lng: e.longitude })
			}
			else {ourindex = i;}
		})
		position.splice(ourindex, 1);
		return(
			<div>
				<NavLink to="/" className={styles.prev}>Home</NavLink>
				<hr/>
			<div style={{height: '100%'}}>
				<MapWithAMarker
					containerElement={
						<div style={{ height: '500px' }} />
					}
					mapElement={
						<div style={{ height: '100%' }} />
					}
					markers={position}
				/>
			</div>
			</div>
		);
	}
}
Map = connect( (state)=>{ return {state} })(Map);

const MapWithAMarker = withGoogleMap(props =>
	<GoogleMap defaultZoom={7} defaultCenter={{ lat: 55.483752, lng: 38.153539 }}>
		{props.markers.map(marker=><Marker position={marker}/>)}
	</GoogleMap>
);

export default Map;