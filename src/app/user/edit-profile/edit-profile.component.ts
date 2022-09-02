import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from 'src/app/Services/login.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  
  passwordForm:FormGroup = new FormGroup(
    {
      oldPasswordControl:new FormControl(''),
      newPasswordControl:new FormControl(''),
    }
   )
  
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
    
  constructor(public userService:UserService,public loginService:LoginService,private route:Router,private toster:ToastrService) { }
  
  ngOnInit(): void {
    this.loginService.checkIfLoginOrNot();
    this.userService.getUserById(this.loginService.userId);
    this.loginService.getLoginByUserId(this.loginService.userId);
    
   
  }

  updateUser(){
    debugger;

    this.updateUserForm.controls['userid'].setValue(this.userService.user.userid);
    this.updateUserForm.controls['gender'].setValue(this.userService.user.gender);
   this.updateUserForm.controls['country'].setValue(this.userService.user.country);

    this.updateUserForm.value.imagepath = this.userService.user.imagepath;
    console.log(this.updateUserForm.value)
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


   checkMatchPassword(){
    console.log(this.passwordForm.controls['oldPasswordControl'].value  == this.loginService.login.password)
    if(this.passwordForm.controls['oldPasswordControl'].value != this.loginService.login.password)
{  
  this.toster.warning('Old Password is not correct ...');

}   }


  changePassword(){
    if(this.passwordForm.controls['oldPasswordControl'].value == this.loginService.login.password)
   this.loginService.changePassword(this.loginService.login.loginid,this.passwordForm.controls['newPasswordControl'].value)
  }

  verfiyEmail(){
    console.log("here,verfiy")
    this.loginService.getLoginByUserId(this.loginService.userId);
    console.log(this.loginService.login)

    this.loginService.sendVerfiyCodeEmail(this.loginService.login.username);
    this.route.navigate(['authentication/verfiy'])


  }

}
