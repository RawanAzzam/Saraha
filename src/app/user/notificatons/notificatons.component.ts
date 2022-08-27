import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/Services/login.service';

@Component({
  selector: 'app-notificatons',
  templateUrl: './notificatons.component.html',
  styleUrls: ['./notificatons.component.css']
})
export class NotificatonsComponent implements OnInit {

  constructor(public loginservice:LoginService) { }

  ngOnInit(): void {
    this.loginservice.checkIfLoginOrNot();
    
    this.loginservice.getLoginByUserId(this.loginservice.loginId);
    
  }

}
