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
     this.http.get("https://localhost:44324/Api/Testimonial/GetUserTestemonial").subscribe((result)=>
     {
       this.testimonial=result;
     })
   }

   deletetest(id:number)
   {
     
     this.http.delete('https://localhost:44324/Api/Testimonial/'+id).subscribe((resp)=>{
     
     },err=>{
      
     })
     window.location.reload();
   }

   UpdateTest(is_Accepted:number, testimonialid:number)
  {
 
 this.http.get('https://localhost:44324/api/Testimonial/UpdateAcceptingStatus/'+is_Accepted+'/'+testimonialid).subscribe((resp)=>{
     
     },err=>{
      
     })
    window.location.reload();
   }
 

  }