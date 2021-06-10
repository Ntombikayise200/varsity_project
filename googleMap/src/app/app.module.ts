import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocationComponent } from './components/location/location.component';

import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    LocationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyC6CWqBSRI5GILTJr0G3SFnYM0fAZMFu7o'
      // libraries:['Johannesburg']
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
