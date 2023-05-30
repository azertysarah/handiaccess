import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private url : string = apiUrl + 'places';
  
  constructor(private http : HttpClient) { }
  
  public getAllPlaces() {
    return this.http.get(this.url);
  }

  public getPlace(id: String){
    return this.http.get(this.url + "/" + id);
  }
}
