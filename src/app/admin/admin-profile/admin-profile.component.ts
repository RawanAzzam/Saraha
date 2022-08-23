import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(private userService:UserService) { }
  user:any
  updateUserForm:FormGroup = new FormGroup({
    userid:new FormControl(''),
    username:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    phonenumber:new FormControl('',Validators.required),
    gender:new FormControl(''),
    birthdate:new FormControl(''),
    country : new FormControl (''),
    imagepath : new FormControl ('')})


   ngOnInit() {
     this.userService.getUserById(2);

    //  while(this.userService.user == undefined)
    //  continue
     setTimeout(()=> {this.user = this.userService.user;
      console.log(this.user)},5000)
     
     
    

  }

  updateUser(){
    this.updateUserForm.controls['userid'].setValue(this.user.userid);
    this.updateUserForm.controls['gender'].setValue(this.user.gender);
    console.log(this.updateUserForm.value)
    debugger;
    this.userService.updateUser(this.updateUserForm.value);
  }

  uploadImage(file:any){
    if(file.length == 0){
     return
    }
    debugger;
     console.log(file);
    let fileToUpload = <File>file[0];
    const formData = new FormData();
    formData.append('file',fileToUpload,fileToUpload.name);
    this.userService.uploadUserImage(formData);
   }


}
