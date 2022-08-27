import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/Services/login.service';
import { MessageService } from 'src/app/Services/message.service';
import { PostService } from 'src/app/Services/post.service';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public post:PostService,public userService : UserService,public loginservice:LoginService,private dialog:MatDialog ) { }
@ViewChild('callLikesDailog') callLikesDailog! :TemplateRef<any>;
  postForm:FormGroup = new FormGroup({
    posttext:new FormControl('',Validators.required),
    postdate : new FormControl(),
    imagepath : new FormControl (''),
    userid : new FormControl()})
  GetPostLikedBy(postId:any)
  {
    const dialogVal= this.dialog.open(this.callLikesDailog);
    dialogVal.afterClosed().subscribe((result)=>{
      if(result!=undefined)
        {
          if(result=='close')
          
          this.post.GetPostLikedBy(postId);
        
        console.log("Thank you");
       }
    })

  }

  ngOnInit(): void {
    this.loginservice.checkIfLoginOrNot();
    
    this.loginservice.getLoginByUserId(this.loginservice.loginId);
    this.post.GetPostInfoByUserId(this.loginservice.userId);
    
    this.userService.getAll();
    this.userService.Allusers();
 
    
  }
//   GetPostId(postId:any)
//   {
// this.postId=postId;

//   }
CreatePost(){
  this.postForm.value.userid = Number(localStorage.getItem('userId'));
  this.postForm.value.postdate = new Date();
   console.log("here , create post")
  this.post.CreatePost(this.postForm.value);
    }
    userId:any;
    CreateLike(postId: number){
      debugger;

      this.userId=localStorage.getItem('userId');
            this.post.createLike(postId,this.userId);
        }
  

      uploadImage(file:any){
        if(file.length == 0){
         return
        }
        debugger;
        let fileToUpload = <File>file[0];
        const formData = new FormData();
        formData.append('file',fileToUpload,fileToUpload.name);
        this.post.uploadPostImage(formData);
       }
}
