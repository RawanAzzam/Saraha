import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
  login :any 

  getLoginByUserId(userId:number){
    this.http.get('https://localhost:44324/api/Login/GetLoginByUserId/'+userId).subscribe((result) => {
      
      console.log(result);
      this.login = result;
    },err => {
      console.log(err)
    })
  }


  changePassword(loginId:number,password:string){
    this.http.get('https://localhost:44324/api/Login/ChangePassword/'+loginId+'/'+password).subscribe((result) => {
      
      console.log(result);
    },err => {
      console.log(err)
    })

    window.location.reload();
  }
  
}
