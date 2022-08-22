import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FeatureService } from './feature.service';
import jwt_decode from "jwt-decode";
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private home:FeatureService, private http:HttpClient, private router :Router) { }
  submit(email:any,password:any){
    var body ={
            username :email.value.toString(),
            password:password.value.toString()
          }

      const headerDir={
       'Contant-Type':'application/json',
       'Accept':'application/json'
         }
    const requestOptions={
      headers:new HttpHeaders(headerDir)
    }
 
    this.http.post('https://localhost:44324/api/Login/Login',body,requestOptions).subscribe
    ((resp)=>{
   
      const responce ={
        token:resp.toString()
      }
      localStorage.setItem('token',responce.token);
      let data :any = jwt_decode(responce.token);//object 
      console.log(data);
     debugger;
      localStorage.setItem('user',JSON.stringify({...data}) );
    
      if(data.role=='2')
      {
        this.router.navigate(['admin']);
      }
      else if (data.role=='1')
      {
        this.router.navigate(['user']);
      }
     
    },err => {
      console.log(err)
    })




  }
}
