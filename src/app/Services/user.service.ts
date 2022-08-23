import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  users : any = []

  getAll(){
    this.http.get('https://localhost:44324/api/UserProfile/').subscribe((res)=>{
    this.users=res;
    },err=>{
    
    })
  }

  changeBlockUserStatus(loginId:number,blockStatus:number){
    this.http.get('https://localhost:44324/api/Login/UpdateBlockedStatus/'+blockStatus+'/'+loginId).subscribe((res)=>{
      
      },err=>{
        console.log(err);

      })
      window.location.reload();
  }

  deleteAccount(loginId:number,userId:number){
    this.http.delete('https://localhost:44324/api/Login/'+loginId).subscribe((res)=>{
      
    },err=>{
      console.log(err);

    })
    this.http.delete('https://localhost:44324/api/UserProfile/delete/'+userId).subscribe((res)=>{
      
    },err=>{
      console.log(err);

    })
    window.location.reload();
  }

}
