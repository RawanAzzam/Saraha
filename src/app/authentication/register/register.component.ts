import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import {ToastrService} from 'ngx-toastr';
import { UserService } from 'src/app/Services/user.service';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm :FormGroup =  new FormGroup({    
  password : new FormControl('',[Validators.required]),
  username : new FormControl('',[Validators.required]),
  name : new FormControl('',[Validators.required]),
  email : new FormControl('',[Validators.required]),
  phonenumber : new FormControl('',[Validators.required]),
  gender : new FormControl('',[Validators.required]),
  birthdate:new FormControl('',[Validators.required]),
  country : new FormControl('',[Validators.required]),
  imagepath: new FormControl(''),



})

  constructor(private toaster:ToastrService, private spinner :NgxSpinnerService , private user :UserService) { }

  ngOnInit(): void {
  }
  CreateUser(){
    this.user.createUser(this.registerForm.value);
      }

      uploadImage(file:any){
        if(file.length == 0){
         return
        }
        debugger;
        let fileToUpload = <File>file[0];
        const formData = new FormData();
        formData.append('file',fileToUpload,fileToUpload.name);
        this.user.uploadUserImage(formData);
       }







}
