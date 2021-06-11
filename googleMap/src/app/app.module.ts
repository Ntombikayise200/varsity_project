import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './components/location/location.component';

import { AgmCoreModule } from '@agm/core';
import { HomeComponent } from './components/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    LocationComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyC6CWqBSRI5GILTJr0G3SFnYM0fAZMFu7o'
    
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
