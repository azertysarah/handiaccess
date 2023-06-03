import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlaceService } from '../place.service';
import { ActivatedRoute } from '@angular/router';
import { PlaceData } from '../models/place.model';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit, OnDestroy {
  placeId: string = '';
  placeData: PlaceData | any;
  newReviewContent: any;
  rows: number = 1;
  author: string = '';
  reviews: any;

  images = [
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300",
    "https://picsum.photos/300/300"
  ];

  getPlaceSub: any;
  postReviewSub: any;

  constructor(
    private placeService: PlaceService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.placeId = params['id']
    });
    this.placeService.getPlace(this.placeId).subscribe({
      next: (res: any) => {
        this.placeData = res;
        this.reviews = this.placeData.reviews.reverse();
      },
      error: (err: any) => console.warn(err)
    });
  }

  onLoginVerification() {
    // if not logged in -> redirection to login page
  }

  onPostReview() {
    this.postReviewSub = this.placeService.updatePlace(this.newReviewContent, 'review', this.placeId, this.author).subscribe({
      next: () => console.log("Review has been posted"),
      error: () => console.warn("Error occured in onPostReview function, couldn't post review"),
      complete: () => {
        console.warn(this.reviews)
        this.newReviewContent = ''
      }
    })
  }

  ngOnDestroy(): void {
      if(this.getPlaceSub){
        this.getPlaceSub.unsubscribe();
      }
      if(this.postReviewSub){
        this.postReviewSub.unsubscribe();
      }
  }
}
