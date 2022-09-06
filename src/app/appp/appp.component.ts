

import { Component } from '@angular/core';
import * as signalR from "@microsoft/signalr";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-appp',
  templateUrl: './appp.component.html',
  styleUrls: ['./appp.component.css']
})
export class ApppComponent {
  constructor(private toaster:ToastrService) { }
  title = 'Frontend';
  notification :any ;
    connection = new signalR.HubConnectionBuilder()
    .configureLogging(signalR.LogLevel.Debug)
    .withUrl("https://localhost:44324/messageHub", {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .build();
  ngOnInit() {
    debugger;
    this.connection.on("MessageReceived", (message) => {
      console.log(message);
      
      this.notification=message;
      
      if(this.notification!=null && this.notification.userToId ==Number(localStorage.getItem('userId')))
      {
        
   this.toaster.success(this.notification.title);
    }
      
    });
    this.connection.start().catch(err => document.write(err));
  }

}