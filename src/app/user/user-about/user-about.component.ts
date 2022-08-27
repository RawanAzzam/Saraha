import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-user-about',
  templateUrl: './user-about.component.html',
  styleUrls: ['./user-about.component.css']
})
export class UserAboutComponent implements OnInit {

  constructor(public userService:UserService,private loginService:LoginService) { }

  ngOnInit(): void {
    this.loginService.checkIfLoginOrNot();
    this.userService.getUserById(this.loginService.userId);
    this.loginService.getLoginByUserId(this.loginService.userId);
  }

}
