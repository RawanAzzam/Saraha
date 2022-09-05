import { Component, OnInit } from '@angular/core';
import { FollowService } from 'src/app/Services/follow.service';
import * as signalR from "@microsoft/signalr";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-followers',
  templateUrl: './followers.component.html',
  styleUrls: ['./followers.component.css']
})
export class FollowersComponent implements OnInit {

  constructor(public followService:FollowService,private toaster:ToastrService) { }
  title = 'Frontend';
  notification:any ;
 connection = new signalR.HubConnectionBuilder()
 .configureLogging(signalR.LogLevel.Debug)
 .withUrl("https://localhost:44324/messageHub", {
   skipNegotiation: true,
   transport: signalR.HttpTransportType.WebSockets
 })
 .build();
  ngOnInit(): void {
    this.connection.on("MessageReceived", (message) => {
      console.log(message);
      
      this.notification=message;
      
      if(this.notification!=null && this.notification.userToId ==Number(localStorage.getItem('userId')))
      {
        
       this.toaster.success(this.notification.userFrom +" "+this.notification.notificationText);

      }
    });
    this.connection.start().catch(err => document.write(err));
    
    this.followService.getFollowers(Number(localStorage.getItem("userId")));

  }

  deleteFollowByUser(userFrom:number){
    this.followService.deleteFollowByUser(userFrom,Number(localStorage.getItem('userId')));
  }


}