import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/Services/login.service';
import { MessageService } from 'src/app/Services/message.service';
import { PostService } from 'src/app/Services/post.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService:MessageService,private dialog:MatDialog , public postService :PostService,public loginservice:LoginService) { }
  // id = 1;
  @ViewChild('callreplyDailog') callreplyDailog! :TemplateRef<any>;
  @ViewChild('callPublishDailog') callPublishDailog! :TemplateRef<any>;
  
 replyForm : FormGroup = new FormGroup(
  {
    messageContent : new FormControl(),
    messageDate : new FormControl(),
    userFrom : new FormControl(),
    userTo : new FormControl(),
  }
   )
   publishForm : FormGroup = new FormGroup(
    {
      messageContent : new FormControl(),
      reply : new FormControl(),
      userTo : new FormControl(),
    })
   msgToPostForm : FormGroup = new FormGroup(
    {
      messageContent : new FormControl(),
      userTo : new FormControl(),
    })

  ngOnInit(): void {
    this.loginservice.checkIfLoginOrNot();
    this.loginservice.getLoginByUserId(this.loginservice.loginId);
  this.messageService.getMessages(this.loginservice.userId);
  }
  MsgToPost(){
    debugger;

    // this.msgToPostForm.controls["userTo"].setValue(localStorage.getItem('userId'));
    // this.msgToPostForm.value.messageContent=msg;
    // this.publishForm.controls["reply"].setValue(reply);
    this.messageService.MsgToPost(this.publishForm.value);

    console.log(this.publishForm.value)

  //  this.dialog.open(this.callreplyDailog)
  }
  openReplyDailog(fromId:number, ToId :number){
    console.log(fromId);
    debugger;
    this.replyForm.controls["userTo"].setValue(fromId);
    this.replyForm.controls["userFrom"].setValue(ToId);

   this.dialog.open(this.callreplyDailog)
  }

  openPublishDailog(msg:string, userTo : number){
    debugger;
    this.publishForm.controls["userTo"].setValue(userTo);
    this.publishForm.controls["messageContent"].setValue(msg);

   this.dialog.open(this.callPublishDailog)
  }

  replyMessage(){
   this.replyForm.controls["messageDate"].setValue(new Date());
   this.replyForm.controls["userFrom"].setValue(localStorage.getItem('userId'));
   debugger;
   console.log(this.replyForm.value)
   this.messageService.createNewMessage(this.replyForm.value);
  }


}
