import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class SarahaWeatherService {

  constructor( private http : HttpClient ,  private user :UserService) { }
  weather : any = [{}]
  u:any;
  
  GetWeather(){
    debugger;
    this.u = this.user.getUserById(Number(localStorage.getItem('userId')));
    this.http.get('https://localhost:44324/api/SarahaWeather/weather/'+'Amman').subscribe((res)=>{
    this.weather=res;
    console.log("hello");
    debugger;
    },err=>{
    
    })
  }
}
