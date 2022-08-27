import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/Services/login.service';
import { TestimonialService } from 'src/app/Services/testimonial.service';

@Component({
  selector: 'app-make-testimony',
  templateUrl: './make-testimony.component.html',
  styleUrls: ['./make-testimony.component.css']
})
export class MakeTestimonyComponent implements OnInit {
  createTest:FormGroup = new FormGroup({
    content:new FormControl('',[Validators.required]),
    userid: new FormControl('')
})
id: any;
  constructor(private Testimonial:TestimonialService,public loginservice:LoginService) { }
  CreateTest(){
   this.createTest.controls["userid"].setValue(Number(localStorage.getItem('userId')));

    this.Testimonial.createTest(this.createTest.value);
      }
  ngOnInit(): void {
    this.loginservice.checkIfLoginOrNot();    
    this.loginservice.getLoginByUserId(this.loginservice.loginId);
  
    this.Testimonial.GetAll();
  }

}
