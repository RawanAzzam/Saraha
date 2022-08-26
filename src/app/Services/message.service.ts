import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http:HttpClient) { }
  id = 1 ;
  messages : any =[]

  getMessages(){
    this.http.get('https://localhost:44324/api/Message/GetUserMessageById/'+this.id).subscribe((result) => {
      this.messages = result;
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

}
