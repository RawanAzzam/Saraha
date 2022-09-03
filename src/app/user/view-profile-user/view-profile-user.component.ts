import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { LoginService } from 'src/app/Services/login.service';
import { MessageService } from 'src/app/Services/message.service';
import { PostService } from 'src/app/Services/post.service';
import { UserService } from 'src/app/Services/user.service';
import { ViewProfileService } from 'src/app/Services/view-profile.service';

@Component({
  selector: 'app-view-profile-user',
  templateUrl: './view-profile-user.component.html',
  styleUrls: ['./view-profile-user.component.css']
})
export class ViewProfileUserComponent implements OnInit {

  constructor(public userService : UserService,private route:ActivatedRoute,public viewService:ViewProfileService,
    private dialog:MatDialog,public messageService:MessageService,private loginService:LoginService,public post:PostService) { }
   id : any
  
   @ViewChild('callSendMessageDailog') callSendMessageDailog! :TemplateRef<any>;
  
   replyForm : FormGroup = new FormGroup(
    {
      messageContent : new FormControl(),
      is_Anon : new FormControl(),
      messageDate : new FormControl(),
      userFrom : new FormControl(),
      userTo : new FormControl(),
    }
   )
   @Input()
ngSwitchCase: any
  ngOnInit(): void {
this.id = this.route.snapshot.params['id']
console.log(this.id)
    this.viewService.getUserById(this.id);
    this.viewService.getPost(this.id);
    this.post.GetPostInfoByUserId(this.id)
    this.post.GetPostLikedBy(this.id);
    this.post.getlikecount(this.id);
    this.messageService.getMessagescountbyid(this.id);
  }

  openSendMessageDailog(){
    this.replyForm.controls["userTo"].setValue(Number(this.id));
   console.log(this.viewService.user)
   this.dialog.open(this.callSendMessageDailog)
  }

  replyMessage(){
    this.replyForm.controls["userTo"].setValue(Number(this.id));
   this.replyForm.controls["messageDate"].setValue(new Date());
   this.replyForm.controls["userFrom"].setValue(Number(localStorage.getItem('userId')));
   debugger;
   console.log(this.replyForm.value)
   this.messageService.createNewMessage(this.replyForm.value);
  }

  change(evant:any){
    console.log(this.replyForm.value)
    console.log(evant);
  }
  CommentForm:FormGroup = new FormGroup({
    commenttext:new FormControl('',Validators.required),
    userid: new FormControl(),
    // imagepath : new FormControl (''),
    postid : new FormControl()})

    userId:any;
    CreateLike(postId: number){
          debugger;
    
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
}
