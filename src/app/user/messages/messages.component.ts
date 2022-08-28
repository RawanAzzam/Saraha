import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MessageService } from 'src/app/Services/message.service';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService:MessageService,private dialog:MatDialog , public postService :PostService) { }
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
   msgToPostForm : FormGroup = new FormGroup(
    {
      messageContent : new FormControl(),
      userTo : new FormControl(),
    })

  ngOnInit(): void {
  this.messageService.getMessages();
  }
  MsgToPost(msg:string, userTo : number){
    debugger;

    // this.msgToPostForm.controls["userTo"].setValue(localStorage.getItem('userId'));
    // this.msgToPostForm.value.messageContent=msg;
    this.messageService.MsgToPost(msg,userTo);

    console.log(this.msgToPostForm.value)

  //  this.dialog.open(this.callreplyDailog)
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
