import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public post:PostService ) { }
  postForm:FormGroup = new FormGroup({
    posttext:new FormControl('',Validators.required),
    postdate : new FormControl(),
    imagepath : new FormControl (''),
    userid : new FormControl()})

  ngOnInit(): void {
    this.post.getPost();

  }
  CreatePost(){
    this.postForm.value.userid = Number(localStorage.getItem('userId'));
    this.postForm.value.postdate = new Date();
     console.log("here , create post")
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
