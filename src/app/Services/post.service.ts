import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  posts : any = [{}]
  postcount : any;
  postImage:any;
  getAll(){
    this.http.get('https://localhost:44324/api/Post/').subscribe((res)=>{
    this.posts=res;
    this.postcount =this.posts.length;
    },err=>{
    
    })
  }
  CreatePost(post:any){
    console.log(post);
    post.imagepath = this.postImage.imagepath;

    debugger;
    this.http.post('https://localhost:44324/api/Post/CreatePost',post).subscribe((result) =>{

    },Erorr =>{

    })
    window.location.reload();
  }
  // UserId = 21 ;
  post : any =[]
  postcountById : any;
  getPost(userId:number){
    this.http.get('https://localhost:44324/api/post/GetPostByUserId/'+userId).subscribe((result) => {
      this.post = result;
      this.postcountById=this.post.length; 
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
}
