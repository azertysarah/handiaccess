import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../place.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  placeId: String = '';
  placeData: any;
  images: any[] = [
    'https://picsum.photos/300/300', 
    'https://picsum.photos/300/300',
    'https://picsum.photos/300/300', 
    'https://picsum.photos/300/300'
  ]

  constructor(
    private placeService: PlaceService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.placeId = params['id']
    });
    this.placeService.getPlace(this.placeId).subscribe({
      next: (res: any) => this.placeData = res,
      error: (err: any) => console.warn(err)
    });
  }

}
