import { Component, OnInit } from '@angular/core';
import { AddsService } from 'src/app/Services/adds.service';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-user-timeline',
  templateUrl: './user-timeline.component.html',
  styleUrls: ['./user-timeline.component.css']
})
export class UserTimelineComponent implements OnInit {

  constructor(public addsService:AddsService) { }

  ngOnInit(): void {
   
    this.addsService.GetAddById();

  }

}
