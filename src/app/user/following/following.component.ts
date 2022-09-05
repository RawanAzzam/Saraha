import { Component, OnInit } from '@angular/core';
import { FollowService } from 'src/app/Services/follow.service';

@Component({
  selector: 'app-following',
  templateUrl: './following.component.html',
  styleUrls: ['./following.component.css']
})
export class FollowingComponent implements OnInit {

  constructor(public followService:FollowService) { }

  ngOnInit(): void {
    this.followService.getFollowing(Number(localStorage.getItem("userId")));
  }

  deleteFollowByUser(userTo:number){
    this.followService.deleteFollowByUser(Number(localStorage.getItem('userId')),userTo);
  }

}
