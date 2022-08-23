import { Component, OnInit } from '@angular/core';
import { ContactUsService } from 'src/app/Services/contact-us.service';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public userservice:UserService , public contactUs:ContactUsService) { }
  ngOnInit(): void {
     this.userservice.getAllLoginUsers();
   
   this.contactUs.GetAll();


  }

}
