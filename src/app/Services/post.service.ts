import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient,public loginservice:LoginService) { }
  posts : any = [{}]
  postcount : any;
  postImage:any;
  Postlike:any;
  getAll(){
    this.http.get('https://localhost:44324/api/Post/').subscribe((res)=>{
    this.posts=res;
    this.postcount =this.posts.length;
    },err=>{
    
    })
  }
  CreatePost(post:any){
    console.log(post);
    if(this.postImage != null)
    post.imagepath = this.postImage.imagepath;

    debugger;
    this.http.post('https://localhost:44324/api/Post/CreatePost',post).subscribe((result) =>{
      console.log(result)
    },Erorr =>{
      console.log(Erorr)
    })
    window.location.reload();
  }
  UserId = localStorage.getItem('userId') ;
  userpost : any =[]
  postcountById : any;
  GetPostInfoByUserId(userId:number){
    
    this.http.get('https://localhost:44324/api/Post/GetPostByUserId/'+userId).subscribe((result) => {
      this.userpost = result;
      debugger;
      for(let x of this.userpost){this.GetPostLikedBy(x.postId)}
      for(let x of this.userpost){this.GetPostCommentBy(x.postId)}
      this.postcountById=this.userpost.length; 
      console.log(result);
    },Error => {
      console.log(Error);
    })
  }
  IsLike :any;
  CheckIfLiked(userId:number , postId:number){
    
    this.http.get('https://localhost:44324/api/Like/IsLike/'+userId + '/'+postId).subscribe((result) => {
      this.IsLike = result;
  
    },Error => {
      console.log(Error);
    })
  }
  likes=new Map();
  GetPostLikedBy(postId:number){ 
    debugger;
    this.http.get('https://localhost:44324/api/Post/GetPostLikedByPostId/'+postId).subscribe((result) => {
      this.likes.set(postId,result);

      console.log(result);
    },Error => {
      console.log(Error);
    })
  }
  Comments= new Map();
commentCount:number=0;
  GetPostCommentBy(postId:number){ 
    debugger;
    this.http.get('https://localhost:44324/api/Post/CommentsByUser/'+postId).subscribe((result) => {
      this.Comments.set(postId,result);
      console.log(result);
    },Error => {
      console.log(Error);
    })
  }
  like :any =[{}]
  likecount:any;
  getlikecount(userId:number){
    this.http.get('https://localhost:44324/api/Like/Likescount/'+userId).subscribe((result) => {
      this.like = result;
     this.likecount = this.like.length;
      console.log(result);
    },Error => {
      console.log(Error);
    })
  }
  uploadPostImage(file : FormData){
    this.http.post('https://localhost:44324/api/Post/UploadPostImage',file).subscribe((result) => {
      debugger;
      this.postImage = result;
      console.log(this.postImage);      
    },err => {
      console.log(err)
    })

  }

  createLike(postId: number, userId:number){
    debugger;
    // this.Postlike.postId=postId;
    this.http.get('https://localhost:44324/api/Like/CreateLike/'+userId+'/'+postId + '/'+Number(localStorage.getItem('userId')) ).subscribe((result) =>{
      console.log(result)
    },Erorr =>{
      console.log(Erorr)
      
    })
  }

  createComment(comment: any){
    debugger;
    this.http.post('https://localhost:44324/api/Comment/CreateComment', comment).subscribe((result) =>{
      console.log(result)
    },Erorr =>{
      console.log(Erorr)
      
    })
  }
  
  
  deletePost(id:number){
    this.http.delete('https://localhost:44324/api/Post/delete/'+id).subscribe((resp)=>{
     
    },err=>{
     
    })
  }


  UpdatePost (body:any)
  {
    // this.spinner.show();
    if(this.postImage != null)
    body.imagepath=this.postImage.imagepath;
    debugger;
console.log(body);

this.http.put('https://localhost:44324/api/Post',body).subscribe((resp)=>{
      // this.spinner.hide();
      // this.toaster.success('Updated |Successfully');
    },err=>{
      // this.spinner.hide();
      // this.toaster.error(err.message);
    })
   window.location.reload();
  }
  PinPost (postId :any,isPin:any)
  {
    debugger;

    this.http.get('https://localhost:44324/api/Post/PinPost/'+postId+'/'+isPin).subscribe((resp)=>{
      // this.spinner.hide();
      // this.toaster.success('Updated |Successfully');
    },err=>{
      // this.spinner.hide();
      // this.toaster.error(err.message);
    })
   window.location.reload();
  }
 Top3post : any =[{}];
  Top3Post(userId:number){
    this.http.get('https://localhost:44324/api/Post/Top3Post/'+userId).subscribe((result) => {
      this.Top3post = result;
    
      console.log(result);
    },Error => {
      console.log(Error);
    })
  }


}
