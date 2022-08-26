import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'src/app/Services/message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService:MessageService,private dialog:MatDialog) { }
  // id = 1;
 @ViewChild('callreplyDailog') callreplyDailog! :TemplateRef<any>;
  
   replyForm : FormGroup = new FormGroup(
    {
      messageContent : new FormControl(),
      messageDate : new FormControl(),
      userFrom : new FormControl(),
      userTo : new FormControl(),
    }
   )

  ngOnInit(): void {
  this.messageService.getMessages();
  }

  openReplyDailog(fromId:number){
    console.log(fromId);
    this.replyForm.controls["userTo"].setValue(fromId);

   this.dialog.open(this.callreplyDailog)
  }

  replyMessage(){
   this.replyForm.controls["messageDate"].setValue(new Date());
   this.replyForm.controls["userFrom"].setValue(localStorage.getItem('userId'));
   debugger;
   console.log(this.replyForm.value)
   this.messageService.createNewMessage(this.replyForm.value);
  }


}
