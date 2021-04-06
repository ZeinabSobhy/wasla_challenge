import axios from "axios"
import axiosInstance from '../axios/axiosInstance';
const api_url ='dayone/country';
export const gitAlCorona = () =>
	axios.get('https://api.covid19api.com/');


export const getByCountry = (country) =>  {
	return axiosInstance.get(`${api_url}/${country}`)
}



export const getAllCountry = () => {
	return axiosInstance.get(`/countries`);
}


export const getonfirmedAndDeaths = (country) => {
	return axiosInstance.get(`total/dayone/country/${country}`);
}



