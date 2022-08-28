import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }
    id = 1 ;
  messages : any =[];
  allMessages:any=[];


  getMessages(){

    this.http.get('https://localhost:44324/api/Message/GetUserMessageById/'+this.id).subscribe((result) => {
      this.messages = result;
      console.log(result);
    },Error => {
      console.log(Error);
    })
  }
  messcount :any;
  getMessagescountbyid(userid:number){
    this.http.get('https://localhost:44324/api/Message/messagecount/'+userid).subscribe((result) => {
      this.messages = result;
      this.messcount=this.messages.length;
      console.log(result);
    },Error => {
      console.log(Error);
    })
  }

  createNewMessage(message:any){
    debugger;
    if(message.is_Anon == null) message.is_Anon = false
    this.http.post('https://localhost:44324/api/Message',message).subscribe((result) => {
      console.log(result);
    },Error => {
      console.log(Error);
    })
   
    window.location.reload();
  }
  getAllMessages(){

    this.http.get("https://localhost:44324/api/Message").subscribe((result) => {
      this.allMessages = result;
    },error => {
      console.log(error)
    })
 
   }
// userId:any=0;
// msg: any="";

   MsgToPost(msg: any){
    debugger;
    // this.messagePost.messageContent= msg.messageContent;
    // this.messagePost.userTo=msg.userTo;
    
    // console.log(this.messagePost.messageContent)
    // console.log(this.messagePost.userTo)



    this.http.get('https://localhost:44324/api/Post/MsgToPost/'+msg.messageContent+'/'+msg.userTo+'/'+msg.reply).subscribe((result) => {
      console.log(result);
    },Error => {
      console.log(Error);
    })
   
    window.location.reload();
  }

}





