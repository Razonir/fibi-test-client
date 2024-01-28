import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { serverUrl } from './baseurl';
@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private httpClient: HttpClient) {}

  private baseURL = serverUrl.url + 'api/user/';
  token: any;

  login(user: User) {
    return this.httpClient.post<any>(this.baseURL + 'login', user);
  }

  signUp(user: User) {
    return this.httpClient.post<any>(this.baseURL, user);
  }

  Update(user: User) {
    return this.httpClient.put<any>(this.baseURL, user);
  }

  getOneUser(id: string) {
    return this.httpClient.get<any>(this.baseURL + id);
  }

  getAllUsers() {
    return this.httpClient.get<any>(this.baseURL);
  }

  remove(id:string) {
    return this.httpClient.delete<any>(this.baseURL + id);
  }


}
