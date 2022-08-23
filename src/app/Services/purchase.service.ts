import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PurchaseService {


  p: any=[{
  }]
 
 
   constructor(private http:HttpClient) { 


   }
   GetAll(){
     this.http.get("https://localhost:44324/Api/Purchase/GetPurchases").subscribe((result)=>
     {
       this.p=result;
     })
   }}
