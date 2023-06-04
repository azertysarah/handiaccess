import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { UserComponent } from './user/user.component';
import { PlaceComponent } from './place/place.component';
import { CreateaccountComponent } from './create_account/create_account.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'map', component: MapComponent },
  { path: 'home', component: HomeComponent },
  { path: 'places/:id', component: PlaceComponent },
  { path: 'user', component: UserComponent },
  { path: 'create_account', component: CreateaccountComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
