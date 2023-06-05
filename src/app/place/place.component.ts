import { Component, OnDestroy, OnInit } from '@angular/core';
import { PlaceService } from '../services/place.service';
import { ActivatedRoute, Router } from '@angular/router';
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
  author: any = localStorage.getItem('user');
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
    private activeRoute: ActivatedRoute,
    private router: Router
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
    const userToken = localStorage.getItem('token');
    if(userToken===''){
      this.router.navigate(['/user']);
    }
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

  goToMap(){
    this.router.navigate(['/map']);
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
