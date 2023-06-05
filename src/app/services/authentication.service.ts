import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private url : string = apiUrl + "authentication";
  
  constructor(private http : HttpClient) { }
  
  public login(loginData: any) {
    return this.http.post<any>(this.url + "/login", loginData);
  }

  public signup(formData: any) {
    return this.http.post<any>(this.url + "/signup", formData);
  }

}
