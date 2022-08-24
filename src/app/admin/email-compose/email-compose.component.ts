import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EmailServiceService } from 'src/app/Services/email-service.service';

@Component({
  selector: 'app-email-compose',
  templateUrl: './email-compose.component.html',
  styleUrls: ['./email-compose.component.css']
})
export class EmailComposeComponent implements OnInit {

  constructor(private email:EmailServiceService) { }
  emailForm:FormGroup = new FormGroup({
    To:new FormControl('',[Validators.required,Validators.email]),
    Email:new FormControl('',Validators.required),
    Message:new FormControl('',Validators.required),
  })
  ngOnInit(): void {
  }
  SendEmail(){
    this.email.SendEmail(this.emailForm.value);
      }
}
