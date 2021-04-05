
import axiosInstance from '../axios/axiosInstance';

export const getEmployeeData = () =>   axiosInstance.get('employee');