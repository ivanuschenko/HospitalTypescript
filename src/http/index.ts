import axios, { Axios, AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { URL } from 'src/constants';
import { IAuthResponse } from 'src/types/types';

const api = axios.create({
  withCredentials: true,
  baseURL: URL
})

api.interceptors.request.use((config:AxiosRequestConfig) => {
  config.headers!.Authorization = `Bearer ${localStorage.getItem('token')}`
  return config;
})  

api.interceptors.response.use((config:AxiosResponse) => {
  return config;
}, async (error) => {
    const originalRequest = error.config;    
    if (error.response.status === 401 && originalRequest && !originalRequest._isRetry) {
      originalRequest._isRetry = true;
      try {
        const response = await axios.get<IAuthResponse>(`${URL}/api/refresh`, { withCredentials: true });          
        localStorage.setItem('token', response.data.accessToken);
        return api.request(originalRequest);
      } 
      catch (e) {        
        alert('Не авторизован!');
      }
    } else {
      throw error;
    }
  } 
);

export default api;
