import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent implements OnInit {
  images: any[] = [
    'https://picsum.photos/300/300', 
    'https://picsum.photos/300/300', 
    'https://picsum.photos/300/300'
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
