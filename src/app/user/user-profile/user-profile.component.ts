import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/Services/post.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public post:PostService,public userService : UserService ) { }
  postForm:FormGroup = new FormGroup({
    postText:new FormControl('',Validators.required),
    imagepath : new FormControl ('')})
  ngOnInit(): void {
    this.post.getPost();
    this.userService.getAll();
    this.userService.Allusers();
  }
  CreatePost(){
  
    this.post.CreatePost(this.postForm.value);
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
