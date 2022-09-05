

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
  m :any ;
    connection = new signalR.HubConnectionBuilder()
    .configureLogging(signalR.LogLevel.Debug)
    .withUrl("https://localhost:44324/messageHub", {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .build();
  ngOnInit() {
    this.connection.on("MessageReceived", (message) => {
      console.log(message);
      
      this.m=message;
      
      if(this.m!=null && this.m.userToId ==Number(localStorage.getItem('userId')))
      {
        
       this.toaster.success(this.m);

      }
    });
    this.connection.start().catch(err => document.write(err));
  }
  

  


}