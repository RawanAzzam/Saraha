import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  testimonial: any=[{
  }]
 
 
   constructor(private http:HttpClient) { 


   }
   GetAll(){
     this.http.get("https://localhost:44324/Api/Testimonial").subscribe((result)=>
     {
       this.testimonial=result;
     })
   }

   deletetest(id:number)
   {
     
     this.http.delete('https://localhost:44324/Api/Testimonial/delete/'+id).subscribe((resp)=>{
     
     },err=>{
      
     })
     window.location.reload();
   }

   UpdateTest(body:any)
  {
 
 this.http.put('https://localhost:44324/api/Testimonial',body).subscribe((resp)=>{
     
     },err=>{
      
     })
    window.location.reload();
   }
 

  }