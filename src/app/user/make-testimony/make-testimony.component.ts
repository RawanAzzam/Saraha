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
    content:new FormControl(''),
    userid: new FormControl('')
})
  constructor(private Testimonial:TestimonialService) { }
  CreateTest(){
    this.Testimonial.createTest(this.createTest.value);
      }
  ngOnInit(): void {
    this.Testimonial.GetAll();
  }

}
