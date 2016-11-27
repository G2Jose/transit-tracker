import React from 'react';

import Map from './Map.js';
import { getVehicles } from '../Utils/apiUtils.js';

/*
 A component to hold the Map component. Fetches a list of vehicle locations
 on componentWillMount, and then ever 2 seconds. 
 */
export default class MapContainer extends React.Component {

	constructor(props) {
		super(props);
		// This is where we'll store vehicle locations and headings once we get them.
		this.state = {
		};
	}

	componentWillMount() {
		// Get list of vehicle locations, headings etc from restbus
		const plotVehicles = () => getVehicles().then((results) => {
			const markers = results.data.map((item, index) => {
				// Transform list into a form expected by the Map component
				return {
					position: {
						lat: item.lat,
						lng: item.lon,
					},
					key: index,
					// We'll make the icons little triangles in order to show headings
					icon: {
						// We're using the window.google variable here obtained from the script tag in index.html
						path: window.google.maps.SymbolPath.FORWARD_CLOSED_ARROW,
						scale: 1.5,
						fillColor: '#000080',
						strokeColor: '#000080',
						fillOpacity: 1,
						strokeOpacity: 1,
						rotation: item.heading,
					},
				};
			});
			// Update state with these markers
			this.setState({ markers });
		});

		plotVehicles();
		window.setInterval(plotVehicles, 2000);
	}

	render() {
		return (
			// I noticed the vh is important here.
			// Setting it to 100% will cause a component of height 0px to be rendered instead
			<div style={{ height: '100vh' }}>
				<Map
					containerElement={
						<div style={{ height: '100%' }} />
					}
					mapElement={
						<div style={{ height: '100%' }} />
					}
					onMapLoad={this.handleMapLoad}
					onMapClick={this.handleMapClick}
					markers={this.state.markers}
					onMarkerRightClick={this.handleMarkerRightClick}
				/>
			</div>
		);
	}
}
