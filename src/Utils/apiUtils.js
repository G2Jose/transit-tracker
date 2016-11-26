import axios from 'axios';

const getVehicles = () => {
	return axios.get('http://restbus.info/api/agencies/ttc/vehicles');
};

export {
	getVehicles,
};
