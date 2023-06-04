import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
  export class AuthService {
    private backendUrl = 'http://localhost:3000/authentication';
  
    constructor(private http: HttpClient) {}
  
    signup(formData: any): Observable<any> {
      const url = `${this.backendUrl}/signup`;
      return this.http.post(url, formData);
    }
  }
  