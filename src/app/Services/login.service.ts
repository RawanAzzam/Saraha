import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient,private router :Router) { }
  login :any 
  userId : any
  loginId : any
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

  checkIfLoginOrNot(){
    console.log(localStorage.getItem('userId'));
    if(localStorage.getItem('userId') == null)
    this.router.navigate(['authentication/Login']);
    else
   { 
    this.userId = Number(localStorage.getItem('userId'));
   this.loginId = Number(localStorage.getItem('loginId'));}
  }

  logout(){
    this.updateActiveStatus(this.loginId,0)
    console.log(this.loginId);
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    this.router.navigate(['']);

  

 
  }

  updateActiveStatus(loginId:number,isActive:number)
  {
    debugger;
    this.http.get("https://localhost:44324/api/Login/UpdateActiveStatus/"+isActive+"/"+loginId).subscribe((result) => {
      console.log(result);
    },Error => {
      console.log(Error);
    })
  }


  
}
