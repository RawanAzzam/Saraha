import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  users : any = []
  userImage:any
  user:any
  getAllLoginUsers(){
    this.http.get('https://localhost:44324/api/UserProfile/GetAllLoginUsers').subscribe((res)=>{
    this.users=res;
    },err=>{
    
    })
  }

  createUser(user:any){
    user.imagepath = this.userImage.imagepath;
    console.log(user);
    this.http.post('https://localhost:44324/api/UserProfile',user).subscribe((res)=>{

      },err=>{
      console.log(err);
      })
      
      window.location.reload();
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

  uploadUserImage(file : FormData){
    this.http.post('https://localhost:44324/api/UserProfile/UploadUserImage',file).subscribe((result) => {
      debugger;
      this.userImage = result;
      console.log(this.userImage);
    },err => {
      console.log(err)
    })
  
  }

   updateUser(user:any){
    if(this.userImage != null)
    user.imagePath=this.userImage.imagePath;

    this.http.put('https://localhost:44324/api/UserProfile',user).subscribe((result) => {
      debugger;
      console.log(user);
    },err => {
      console.log(err)
    })
  }

  getUserById(userId:number){
    this.http.get('https://localhost:44324/api/UserProfile/GetUserById/'+userId).subscribe((result) => {
      
      console.log(result);
      this.user = result;
    },err => {
      console.log(err)
    })
  }

}
