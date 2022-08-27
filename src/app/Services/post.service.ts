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
      this.postcountById=this.userpost.length; 
      console.log(result);
    },Error => {
      console.log(Error);
    })
  }
  likes:any=[];
  GetPostLikedBy(postId:number){
    this.http.get('https://localhost:44324/api/Post/GetPostLikedByPostId/'+postId).subscribe((result) => {
      this.likes = result;
      this.postcountById=this.likes.length; 
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

  createLike(postId: number){
    debugger;
    this.Postlike.postId=postId;
    this.Postlike.userId=this.loginservice.userId;
    this.http.post('https://localhost:44324/api/Like/CreateLike',this.Postlike).subscribe((result) =>{
      console.log(result)
    },Erorr =>{
      console.log(Erorr)
    })
    window.location.reload();
  }
}
