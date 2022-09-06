import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { FollowService } from 'src/app/Services/follow.service';
import { LoginService } from 'src/app/Services/login.service';
import { MessageService } from 'src/app/Services/message.service';
import { PostService } from 'src/app/Services/post.service';
import { ReportService } from 'src/app/Services/report.service';
import { UserService } from 'src/app/Services/user.service';
import { ViewProfileService } from 'src/app/Services/view-profile.service';
import * as signalR from "@microsoft/signalr";
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-profile-user',
  templateUrl: './view-profile-user.component.html',
  styleUrls: ['./view-profile-user.component.css']
})
export class ViewProfileUserComponent implements OnInit {

  constructor(public userService : UserService,private route:ActivatedRoute,public viewService:ViewProfileService,
    private dialog:MatDialog,public messageService:MessageService,
    private loginService:LoginService,public post:PostService,private reportService:ReportService,
    public followService:FollowService,private toaster :ToastrService) { }
    title = 'Frontend';
    notification:any ;
   connection = new signalR.HubConnectionBuilder()
   .configureLogging(signalR.LogLevel.Debug)
   .withUrl("https://localhost:44324/messageHub", {
     skipNegotiation: true,
     transport: signalR.HttpTransportType.WebSockets
   })
   .build();
   id : any
 
   @ViewChild('callSendMessageDailog') callSendMessageDailog! :TemplateRef<any>;
   @ViewChild('callReportDailog') callReportDailog! :TemplateRef<any>;
   @ViewChild('callReportPostDailog') callReportPostDailog! :TemplateRef<any>;

   replyForm : FormGroup = new FormGroup(
    {
      messageContent : new FormControl(),
      is_Anon : new FormControl(),
      messageDate : new FormControl(),
      userFrom : new FormControl(),
      userTo : new FormControl(),
    }
   )

   reportForm :FormGroup = new FormGroup(
    {
      Message : new FormControl(),
      UserFrom : new FormControl(),
      UserTo : new FormControl(),
      is_Anon : new FormControl()
    }
  )

   @Input()
ngSwitchCase: any
  ngOnInit(): void {
    this.connection.on("MessageReceived", (message) => {
      console.log(message);
      
      this.notification=message;
      debugger;
      if(this.notification!=null && this.notification.userToId ==Number(localStorage.getItem('userId')))
      {
        
       this.toaster.success(this.notification.userFrom +" "+this.notification.notificationText);

      }
    });
    this.connection.start().catch(err => document.write(err));
this.id = this.route.snapshot.params['id']

    this.viewService.getUserById(this.id);
    this.viewService.getPost(this.id);
    this.post.GetPostInfoByUserId(this.id)
    this.post.GetPostLikedBy(this.id);
    this.post.getlikecount(this.id);
    this.messageService.getMessagescountbyid(this.id);
    this.followService.isFollow(Number(localStorage.getItem("userId")),this.id);
  }

  openSendMessageDailog(){
    this.replyForm.controls["userTo"].setValue(Number(this.id));

   this.dialog.open(this.callSendMessageDailog)
  }

  replyMessage(){
    this.replyForm.controls["userTo"].setValue(Number(this.id));
   this.replyForm.controls["messageDate"].setValue(new Date());
   this.replyForm.controls["userFrom"].setValue(Number(localStorage.getItem('userId')));
   this.replyForm.value.is_Anon = !this.viewService.user.is_Premium;
 
   this.messageService.createNewMessage(this.replyForm.value);
   this.toaster.success("Message Sent ");
  }

  change(evant:any){
    console.log(this.replyForm.value)
  }
  CommentForm:FormGroup = new FormGroup({
    commenttext:new FormControl('',Validators.required),
    userid: new FormControl(),
    // imagepath : new FormControl (''),
    postid : new FormControl()})

    userId:any;
    CreateLike(postId: number){
    
          this.userId=localStorage.getItem('userId');
          this.post.createLike(postId,this.userId);
    }
    createComment(postId:number){
      this.CommentForm.value.userid = Number(localStorage.getItem('userId'));
      this.CommentForm.value.postid=postId;
      this.CommentForm.value.imagepath=null;
      this.post.createComment(this.CommentForm.value);
    }
    postId:any;
changePostId(Id:any){
this.postId=Id;
}

reportUser(){
  this.reportService.createReport(this.reportForm.value);
}

isOther = false
changeOther(){
  if(this.reportForm.value.Message == 'Other')
  this.isOther = true;
  else
  this.isOther = false;
}

openReportDailog(){
  this.reportForm.controls["UserFrom"].setValue(Number(localStorage.getItem('userId')));
  this.reportForm.controls["UserTo"].setValue(Number(this.id));

 this.dialog.open(this.callReportDailog)
}

openReportPostDailog(){
  this.reportForm.controls["UserFrom"].setValue(Number(localStorage.getItem('userId')));
  this.reportForm.controls["UserTo"].setValue(Number(this.id));

 this.dialog.open(this.callReportPostDailog)
}

followUser(){
  const follow  = {
    "userFrom":Number(localStorage.getItem('userId')),
    "userTo": Number(this.id),
    "followDate":new Date()
  }

  this.followService.createFollow(follow);
}

deleteFollowByUser(){
  this.followService.deleteFollowByUser(Number(localStorage.getItem('userId')),Number(this.id));
}
}
