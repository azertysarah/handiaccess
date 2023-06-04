import { Component, OnInit } from '@angular/core';
import { PlaceService } from '../services/place.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  places: any;
  placesName: any[] = [];
  selectedPlace: string = '';
  filteredPlaces: any[] = [];
  loading: boolean = true;

  constructor(
    private placeService: PlaceService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.placeService.getAllPlaces().subscribe({
      next: (res: any) => {
        this.places = res;
        this.placesName = this.getPlacesName(this.places);
      },
      error: (err: any) => console.warn(err),
      complete: () => this.loading = false
    });
  }

  getPlacesName(list: any) {
    let names: any[] = [];
    for(let i=0; i<list.length; i++) {
      names.push(list[i].name);
    }
    return names;
  }

  search(event: any) {
    const query = event.query;
    this.filteredPlaces = this.placesName.filter((placesName) =>
      placesName.toLowerCase().includes(query.toLowerCase())
    );
  }

  onDisplayInformations(placeName: any) {
    console.warn(placeName);
    for(let i=0; i<this.places.length; i++) {
      if(this.places[i].name === placeName) {
        this.router.navigateByUrl(`places/${this.places[i]._id}`);
      }
    }
  }
}
