import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgxSpinnerService } from "ngx-spinner";
import { ContactUsService } from '../Services/contact-us.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  createMessage:FormGroup = new FormGroup({
    username:new FormControl('',Validators.required),
    email:new FormControl('',Validators.required),
    message:new FormControl('',Validators.required),
})
  ngOnInit(): void {
    this.spinner.show();

    setTimeout(() => {
      this.spinner.hide();
    }, 3000);
  }

  CreateMessage(){
this.contactUS.CreateNewMessage(this.createMessage.value);
  }
  constructor(private spinner: NgxSpinnerService,private contactUS : ContactUsService) { }

}
