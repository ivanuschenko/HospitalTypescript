import axios, { AxiosResponse } from 'axios'
import { IAuthResponse } from 'src/types/types';
import api from 'src/http/index';

export default class AuthService {

  static async registration(name: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
    return api.post('/api/registration', {name, password});
  };

  static async signIn(name: string, password: string): Promise<AxiosResponse<IAuthResponse>> {
    return api.post('/api/signIn', {name, password});
  };

  static async signOut(): Promise<AxiosResponse<void>> {   
    return api.get('/api/signOut');
  };
  
  static async checkAuth (): Promise<AxiosResponse<IAuthResponse>> {
    return await axios.get(`/api/refresh`, {withCredentials: true});
  }
}
