import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class FollowService {

  constructor(private http:HttpClient,private toastr:ToastrService) { }
   isFollowUser : any 
   following : any = []
   follower : any = []
    isBlockUser : any
    isUserBlockMee : any
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
     this.isFollow(follow.userFrom,follow.userTo);
     this.getFollowers(follow.userTo);
           this.toastr.success("Follow User Successfully")

    });

  }

  isFollow(userfrom:number,userTo:number){
   this.http.get("https://localhost:44324/api/Follow/IsFollow/"+userfrom+"/"+userTo).subscribe((result) => {
    this.isFollowUser = result;
   })
  }

  deleteFollowByUser(userFrom:number,userTo:number){
    this.http.get("https://localhost:44324/api/Follow/DeleteFollowByUser/"+userFrom+"/"+userTo).subscribe((result) => {
      this.isFollow(userFrom,userTo);
      this.isBlock(userFrom,userTo);
      this.getFollowers(userTo);
      this.toastr.success("UnFollow/UnBlock User Successfully")

     })

  }

  updateBlockUser(userFrom : number,userTo : number, isBlock : number){
    this.http.get("https://localhost:44324/api/Follow/UpdateBlockUser/"+userFrom+"/"+userTo+"/"+isBlock).subscribe((result) => {
      this.isBlock(userFrom,userTo);
      this.toastr.success("Block User Successfully")

     })
  }

  isBlock(userFrom:number,userTo : number){
    this.http.get("https://localhost:44324/api/Follow/IsBlock/"+userFrom+"/"+userTo).subscribe((result) => {
      this.isBlockUser = result;
     })
  }

  isUserBlockMe(userFrom:number,userTo : number){
    this.http.get("https://localhost:44324/api/Follow/IsBlock/"+userFrom+"/"+userTo).subscribe((result) => {
      this.isUserBlockMee = result;
     })
  }
}
