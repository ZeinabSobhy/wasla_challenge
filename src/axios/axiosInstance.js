import axios from 'axios';

const baseURL ='https://api.covid19api.com/'
export default axios.create({
	baseURL,
	headers: { 'Content-Type': 'application/json;charset=UTF-8 '}
});
