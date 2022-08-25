import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomePageService {

  constructor(private http:HttpClient) { }
  aboutUs : any
  homePage:any;
  getAboutUs(){

   this.http.get("https://localhost:44324/api/AboutUs").subscribe((result) => {
     this.aboutUs = result;
   },error => {
     console.log(error)
   })

  }
  getHome(){

    this.http.get("https://localhost:44324/api/Home").subscribe((result) => {
      this.homePage = result;
    },error => {
      console.log(error)
    }) 
   }
}
