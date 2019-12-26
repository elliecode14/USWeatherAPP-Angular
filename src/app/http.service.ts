import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  seattle: any;
  constructor(private _http: HttpClient) { 
    this.Seattle();
  }
  Seattle(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Seattle,us&units=imperial&APPID=525c80564302490ef3e30466f09600db');
  }
  SanJose(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=San%20Jose,us&units=imperial&APPID=525c80564302490ef3e30466f09600db');
  }
  Burbank(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Burbank,us&units=imperial&APPID=525c80564302490ef3e30466f09600db');
  }
  Dallas(){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=Dallas,us&units=imperial&APPID=525c80564302490ef3e30466f09600db');
  }
  search(city:string){
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q='+city+',us&units=imperial&APPID=525c80564302490ef3e30466f09600db');
  }
}
