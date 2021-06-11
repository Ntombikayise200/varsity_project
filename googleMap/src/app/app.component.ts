import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'googleMap';

  latitude =51.678418;
  longitude = 7.809007;


  onChooseLocation(event:any){
this.latitude=event.coords.lat;
this.longitude=event.coords.lat;
console.log(this.latitude);
  }
}
