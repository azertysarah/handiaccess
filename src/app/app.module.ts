import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'primeng/carousel';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReviewComponent } from './review/review.component';
import { PlaceComponent } from './place/place.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ReviewComponent,
    PlaceComponent
  ],
  imports: [
    BrowserModule, 
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
