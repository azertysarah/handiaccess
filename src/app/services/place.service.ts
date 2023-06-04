import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiUrl } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {

  private url : string = apiUrl;
  
  constructor(private http : HttpClient) { }
  
  public getAllPlaces() {
    return this.http.get(this.url + "places");
  }

  public getPlace(id: string) {
    return this.http.get(this.url + "places/" + id);
  }

  public updatePlace(content: string, field: string, placeId: string, author: string) {
    return this.http.patch(this.url + "places/" + placeId, {[field]: content, author: author});
  }
  
  public updateReview(counter: string, reviewId: string, placeId: string) {
    return this.http.patch(this.url + "reviews/" + reviewId, {counter: counter, placeId: placeId});
  }
}
