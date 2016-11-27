import React from 'react';

import { GoogleMap, Marker, withGoogleMap } from 'react-google-maps';

/*
 A component that displays a google maps view. Takes in 
 a list of markers as props, and displays them on the map.
 */
const Map = withGoogleMap((props) => {
	return (
		<GoogleMap
			ref={props.onMapLoad}
			defaultZoom={13}
			defaultCenter={{ lat: 43.6425724, lng: -79.3956483 }}
			onClick={props.onMapClick}
		>
			{props.markers && props.markers.map(marker => (
				<Marker
					{...marker}
				/>
			))}
		</GoogleMap>
	);
});

export default Map;
