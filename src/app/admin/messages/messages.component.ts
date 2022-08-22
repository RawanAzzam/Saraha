import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactUsService } from 'src/app/Services/contact-us.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  constructor( public contactUs:ContactUsService){}
  ngOnInit(): void {

    this.contactUs.GetAll();

  }
  @Input()contactusid:number| undefined;
  @Input()username:string| undefined;
  @Input()email:string| undefined;
  @Input()message:string| undefined;


}


//   constructor() { }

//   ngOnInit(): void {
//   }

// }
