import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ContactUsService {

  Messages: any=[{
  }]
 
 
   constructor(private http:HttpClient) { 


   }
   GetAll(){
     this.http.get("https://localhost:44324/Api/ContactUs").subscribe((result)=>
     {
       this.Messages=result;
     })
   }
 }
