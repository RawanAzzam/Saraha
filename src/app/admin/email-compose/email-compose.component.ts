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
    reportedName:new FormControl('',[Validators.required,Validators.email]),
    reportedEmail:new FormControl('',Validators.required),
    reportMessage:new FormControl('',Validators.required),

   
  })
  ngOnInit(): void {
  }
  SendEmail(){
    this.email.SendEmail(this.emailForm.value);
      }
}
