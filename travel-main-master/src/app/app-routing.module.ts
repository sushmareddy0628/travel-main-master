import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { ContactComponent } from './contact/contact.component';
import { EatComponent } from './eat/eat.component';
import { GridComponent } from './grid/grid.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PlaceComponent } from './place/place.component';
import { PlayComponent } from './play/play.component';
import { SubwayComponent } from './subway/subway.component';

const routes: Routes = [

  {
  
  path:'login',component:LoginComponent},
  {path:'contact',component:ContactComponent},{
    path:'place',component:PlaceComponent
  },{
  path:'eats',component:EatComponent},
  {
    path:'book',component:BookingComponent
  },        
  
  {path:'play',component:PlayComponent},
  {path:'',component:GridComponent},{path:'grid',component:GridComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
