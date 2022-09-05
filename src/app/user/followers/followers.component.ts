import { Component, OnInit } from '@angular/core';
import { FollowService } from 'src/app/Services/follow.service';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(public followService:FollowService) { }

  ngOnInit(): void {
    this.followService.getFollowers(Number(localStorage.getItem("userId")));

  }

  deleteFollowByUser(userFrom:number){
    this.followService.deleteFollowByUser(userFrom,Number(localStorage.getItem('userId')));
  }


}
