import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/Services/login.service';
import { MessageService } from 'src/app/Services/message.service';
import { PostService } from 'src/app/Services/post.service';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  constructor(public post:PostService,public userService : UserService,public loginservice:LoginService,private dialog:MatDialog) { }
  @ViewChild('calldeleteDailog') calldeleteDailog! :TemplateRef<any>;
@ViewChild('callLikesDailog') callLikesDailog! :TemplateRef<any>;
@ViewChild('callupdateDailog') callupdateDailog2! :TemplateRef<any>; 

postForm:FormGroup = new FormGroup({
  posttext:new FormControl('',Validators.required),
  postdate : new FormControl(),
  imagepath : new FormControl (''),
  userid : new FormControl()}) 


  CommentForm:FormGroup = new FormGroup({
    commenttext:new FormControl('',Validators.required),
    userid: new FormControl(),
    // imagepath : new FormControl (''),
    postid : new FormControl()})

    updateForm:FormGroup=new FormGroup({
      postId: new FormControl(),
      posttext:new FormControl(),
      imagepath:new FormControl()
    })
  GetPostLikedBy(postId:any)
  {
    const dialogVal= this.dialog.open(this.callLikesDailog);
    dialogVal.afterClosed().subscribe((result)=>{
      if(result!=undefined)
        {
          if(result=='close')
          
          this.post.GetPostLikedBy(postId);
        
        console.log("Thank you");
       }
    })

  }

  ngOnInit(): void {
    this.loginservice.checkIfLoginOrNot();
    
    this.loginservice.getLoginByUserId(this.loginservice.loginId);
    this.post.GetPostInfoByUserId(this.loginservice.userId);
    
    this.userService.getAll();
    this.userService.Allusers();
 
    
  }
//   GetPostId(postId:any)
//   {
// this.postId=postId;

//   }
CreatePost(){
  this.postForm.value.userid = Number(localStorage.getItem('userId'));
  this.postForm.value.postdate = new Date();
   console.log("here , create post")
  this.post.CreatePost(this.postForm.value);
}
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


deletePost(id:number){ 
debugger;
    const dialogVal= this.dialog.open(this.calldeleteDailog);
    dialogVal.afterClosed().subscribe((result)=>{
      if(result!=undefined)
        {
          if(result=='yes')
          
          this.post.deletePost(id);
        else (result=='no')
        console.log("Thank you");
             }
    })
   
}
uploadImage(file:any){
  if(file.length == 0){
    return
  }
  debugger;
  let fileToUpload = <File>file[0];
  const formData = new FormData();
  formData.append('file',fileToUpload,fileToUpload.name);
  this.post.uploadPostImage(formData);
}
PinPost(postId :any,isPin:any){
  debugger;
  console.log(postId,isPin);
this.post.PinPost(postId,isPin);  
}

p_data:any={};
  updateDailog(obj:any){
    debugger;
    console.log(obj);
    this.p_data={
      postId:obj.postId,
      posttext:obj.posttext,
    imagepath:obj.imagepath,
  
    }
    console.log(this.p_data);
    this.updateForm.controls['postId'].setValue(this.p_data.postId); 
    
    this.dialog.open(this.callupdateDailog2,{panelClass: 'custom-modalbox'})
    
  }
  updatePost(){
    //this.updateForm.value.postId=id;
    debugger;
    this.updateForm.value.imagePath = this.p_data.imagepath;
    this.post.UpdatePost(this.updateForm.value);
  }
}
