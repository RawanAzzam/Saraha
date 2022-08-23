import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup, Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email : FormControl = new FormControl('',[Validators.required,Validators.email]);
  password : FormControl = new FormControl('',[Validators.required,Validators.minLength(8)]);
  phonenumber : FormControl = new FormControl('',[Validators.required,Validators.minLength(10),Validators.pattern("^[0-9]{10,12}$")]);

  




  constructor() { }

  ngOnInit(): void {
  }

}
