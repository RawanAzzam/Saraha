import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
  constructor(private Testimonial:TestimonialService) { }
  CreateTest(){
   this.createTest.controls["userid"].setValue(Number(localStorage.getItem('userId')));

    this.Testimonial.createTest(this.createTest.value);
      }
  ngOnInit(): void {
    this.Testimonial.GetAll();
  }

}
