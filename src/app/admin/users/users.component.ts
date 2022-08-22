import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public userService : UserService,private dialog:MatDialog) { }
  @ViewChild('callCreateDailog') callCreateDailog! :TemplateRef<any>;
  
  createUserForm:FormGroup = new FormGroup({
    username:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    phonenumber:new FormControl('',Validators.required),
    gender:new FormControl(''),
    country : new FormControl (''),
    imagepath : new FormControl ('')})
    
  ngOnInit(): void {
   this.userService.getAllLoginUsers();
  }

  changeBlockStatus(loginId:number,blockStatus:number){
    console.log(loginId);
    this.userService.changeBlockUserStatus(loginId,blockStatus);
  }

  deleteAccount(loginId:number,userId:number){
    this.userService.deleteAccount(loginId,userId)
  }

  openCreateDialog(){
    this.dialog.open(this.callCreateDailog);

  }

  CreateNewUser(){
    debugger;

   this.userService.createUser(this.createUserForm.value)
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
