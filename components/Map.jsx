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
		// массив с координатами линии
		var flightPlanCoordinates = [];
		// путь
		var flightPath;
			// создаем карту
			var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 9,
				center: {lat: 55.483752, lng: 38.153539}
			});
			// преобразуем исходный json в массив объектов с координатами
			var datafiltered = this.props.state.filter( (e)=> typeof(e.longitude) === 'number' );
			var coordinates = datafiltered.map((e)=> {return({lat: e.latitude, lng: e.longitude})})
			//создаем маркеры
			var markers = coordinates.map(function(e, i){
				// создаем один маркер
				var marker = new google.maps.Marker({
					position: e,
					map: map,
					label: this[i].building_grade
				});
				// слушаем клик по маркеру
				marker.addListener('click', (e)=> {
					var markerlat = e.latLng.lat();
					var markerlng = e.latLng.lng();
					var li = document.createElement('li');
					li.textContent = 'lat: '+markerlat+', '+'lng: '+markerlng;
					var button = document.createElement('button');
					button.classList.add('routeButton');
					button.textContent = 'del';
					document.getElementById('routelist').appendChild(document.createElement('hr'));
					document.getElementById('routelist').appendChild(li);
					document.getElementById('routelist').appendChild(button);
					document.getElementById('legend').style.display = 'table';
					// добавляем координаты в массив
					flightPlanCoordinates.push({lat: markerlat, lng: markerlng})
					// если клик по маркеру не первый то убираем линию
					if (flightPath != undefined){
						flightPath.setMap(null)
					}
					flightPath = new google.maps.Polyline({
						path: flightPlanCoordinates,
						geodesic: true,
						strokeColor: '#FF0000',
						strokeOpacity: 1.0,
						strokeWeight: 2
					});
					// рисуем на карте
					flightPath.setMap(map);
					//слушаем клик по кнопке
					button.addEventListener('click', (e)=>{
						var currentLi = e.target.previousElementSibling;
						var nodelist = document.querySelectorAll('li');
						// возвращаем порядковый номер li среди всех li
						var currentLiIndex = Array.prototype.indexOf.call(nodelist, currentLi);
						// удаляем весь айтем
						currentLi.previousElementSibling.remove();
						currentLi.remove();
						e.target.remove();
						// собираем новые координаты
						flightPlanCoordinates.splice(currentLiIndex, 1);
						flightPath.setMap(null);
						flightPath = null;
						// перерисовываем маршрут на основе новых координат
						flightPath = new google.maps.Polyline({
							path: flightPlanCoordinates,
							geodesic: true,
							strokeColor: '#FF0000',
							strokeOpacity: 1.0,
							strokeWeight: 2
						});
						flightPath.setMap(map);
					})
				});
				//возвращаем маркер в массив маркеров
				return marker;
			}, datafiltered);
			//кластеризация маркеров
			var imagePath = 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m';
			var markerCluster = new MarkerClusterer( map, markers, {imagePath: imagePath} );
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
				<div id='legend' className={styles.legend}>
					<h3 className={styles.formap}>Routes</h3>
					<ul id='routelist'></ul>
				</div>
			</div>
		);
	}

}

Map = connect( (state)=>{ return {state} })(Map);

export default Map;