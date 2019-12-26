import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title: string = 'US Current Weather';
  city: any;
  degreeFtemp: any;
  degreeCtemp: any;
  city_name: any;
  err: any;
  constructor(private _httpService: HttpService){}
  ngOnInit(){
    this.getSeattle(); //default weather
    this.degreeFtemp = true;
    this.degreeCtemp = false;
    this.err = false;

  }
  getSeattle(){
    this._httpService.Seattle().subscribe(data => {
    this.city = data;
    });
  }
  getSanJose(){
    this._httpService.SanJose().subscribe(data => { 
    this.city = data;
    });
  }
  getBurbank(){
    this._httpService.Burbank().subscribe(data => {
    this.city = data;
  });
  }
  getDallas(){
    this._httpService.Dallas().subscribe(data => {
      this.city = data;
    });
  }
  searchWeather(){
      this._httpService.search(this.city_name).subscribe(data =>{
        this.city = data;
        console.log(this.city_name);
        console.log(data);
      })
  }
  convertToCelsius(){
    this.degreeFtemp = false;
    this.degreeCtemp = true;
  }
  convertToFahrenheit(){
    this.degreeFtemp = true;
    this.degreeCtemp = false;
  }
  
}
