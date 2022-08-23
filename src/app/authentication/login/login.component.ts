import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
username : FormControl = new FormControl('',[Validators.required]);
password : FormControl = new FormControl('',[Validators.required]);

saveLoginInfo : boolean = false;
  constructor(private route :Router,private auth:AuthService) { }

  ngOnInit(): void {
    if(localStorage.getItem('username') != null && localStorage.getItem('password') != null){
      this.username.setValue(localStorage.getItem('username'));
      this.password.setValue(localStorage.getItem('password'));
      this.saveLoginInfo = true;
    }
  }

  Login(){
   
    if(this.saveLoginInfo){
      localStorage.setItem("username",this.username.value);
      localStorage.setItem("password",this.password.value);
    }
    else{
      localStorage.clear();
    }

    // this.route.navigate(['/','Home'])
    this.auth.submit(this.username,this.password)
  }
  // submit(){
  //   this.auth.submit(this.username,this.password)
      
  //   }

}