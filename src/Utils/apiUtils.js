import axios from 'axios';

// Function that fetches vehicle locations from restbus and returns a promise. 
const getVehicles = () => {
	return axios.get('http://restbus.info/api/agencies/ttc/vehicles');
};

export {
	getVehicles,
};
