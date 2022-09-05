import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(private http:HttpClient) { }
   isFollowUser : any 
   following : any = []
   follower : any = []


   getFollowing(userfrom:number){
    this.http.get("https://localhost:44324/api/Follow/GetFollowing/"+userfrom).subscribe((result) => {
    this.following = result;
    console.log(this.following)
    });
   }

   getFollowers(userTo:number){
    this.http.get("https://localhost:44324/api/Follow/GetFollowers/"+userTo).subscribe((result) => {
    this.follower = result;
    console.log(this.follower)
    });
   }


  createFollow(follow:any){
    this.http.post("https://localhost:44324/api/Follow",follow).subscribe((result) => {

    });

    window.location.reload();
  }

  isFollow(userfrom:number,userTo:number){
   this.http.get("https://localhost:44324/api/Follow/IsFollow/"+userfrom+"/"+userTo).subscribe((result) => {
    this.isFollowUser = result;
   })
  }

  deleteFollowByUser(userFrom:Number,userTo:Number){
    this.http.get("https://localhost:44324/api/Follow/DeleteFollowByUser/"+userFrom+"/"+userTo).subscribe((result) => {
      
     })
     window.location.reload();

  }
}
