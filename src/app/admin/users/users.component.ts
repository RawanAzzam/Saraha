import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(public userService : UserService) { }

  ngOnInit(): void {
   this.userService.getAll();
  }

  changeBlockStatus(loginId:number,blockStatus:number){
    console.log(loginId);
    this.userService.changeBlockUserStatus(loginId,blockStatus);
  }

  deleteAccount(loginId:number,userId:number){
    this.userService.deleteAccount(loginId,userId)
  }

}
