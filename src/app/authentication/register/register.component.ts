import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import {ToastrService} from 'ngx-toastr';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm :FormGroup =  new FormGroup({  email :  new FormControl('',[Validators.required,Validators.email]),
  password : new FormControl('',[Validators.required,Validators.minLength(8)]),
  phonenumber : new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern("^[0-9]{10,12}$")]),

})





  constructor(private toaster:ToastrService, private spinner :NgxSpinnerService) { }

  ngOnInit(): void {
  }

}
