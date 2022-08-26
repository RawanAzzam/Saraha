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
  post : any =[]

  getPost(){
    this.http.get('https://localhost:44324/api/post/GetPostByUserId/'+this.UserId).subscribe((result) => {
      this.post = result;
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
