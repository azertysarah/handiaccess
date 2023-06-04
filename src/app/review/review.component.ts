import { Component, Input } from '@angular/core';
import { PlaceService } from '../services/place.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent {
  @Input() review : any;
  @Input() placeId: string = '';

  constructor(
    private placeService: PlaceService
  ){}

  onIncrementCounter(counter: string, reviewId: string){
      this.placeService.updateReview(counter, reviewId, this.placeId).subscribe({
        next: () => console.log('Review updated'),
        error: () => console.log('Review failed to update')
      });
  }
}
