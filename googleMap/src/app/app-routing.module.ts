import { HomeComponent } from './components/home/home.component';
import { LocationComponent } from './components/location/location.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'location',component:LocationComponent
  },
  {
    path:'Home',component:HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
