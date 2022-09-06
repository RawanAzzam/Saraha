

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
  count :any;
    connection = new signalR.HubConnectionBuilder()
    .configureLogging(signalR.LogLevel.Debug)
    .withUrl("https://localhost:44324/messageHub", {
      skipNegotiation: true,
      transport: signalR.HttpTransportType.WebSockets
    })
    .build();
  ngOnInit() {
    debugger;
    this.connection.on("waed", (message) => {
      console.log(message);
      
      this.m=message;
      
      if(this.m!=null )
      {
        
        this.toaster.success('<a> Hello world!</a>',this.m, {
          enableHtml:true,
      titleClass: "center",
      messageClass: "center"
    }) ;
      }
    });
    this.connection.start().catch(err => document.write(err));
    this.connection.on("www", (likescount) => {
      console.log(likescount);
      
      this.count=likescount;
      
      if(this.m!=null )
      {
        
        this.toaster.success('<a> Hello world!</a>',this.m, {
          enableHtml:true,
      titleClass: "center",
      messageClass: "center"
    }) ;
      }
    });
    this.connection.start().catch(err => document.write(err));
  }

}