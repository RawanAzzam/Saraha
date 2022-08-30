import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class VisaService {
  
visa : any=[{}];
  constructor(private http:HttpClient,private route:Router,private spinner:NgxSpinnerService,private toaster:ToastrService) { }
  getAll(){
    this.http.get('https://localhost:44324/api/Visa').subscribe((res)=>{

      this.visa=res;
     console.log(this.visa);
},err=>{
    
})
}
updateVisa(visa:any){
  
  debugger;
  this.http.put('https://localhost:44324/api/Visa',visa).subscribe((result) => {
    
  },err => {
    console.log(err)
  })

  window.location.reload();
}


checkVisa(cvv:string,totalcost:number){
for(let obj of this.visa)
{
  if(obj.cardNumber == cvv)
  {
    if(obj.balance >= totalcost){
       this.updateVisa(obj)
    }
    else{
      this.toaster.error("no enough balance");
    }
  }
  else{
    this.toaster.error("Invalid Card Number");
  }
  
}

window.location.reload();
}

// VisaForm:FormGroup = new FormGroup(
//   {
//     Cvv:new FormControl('',[Validators.required]),
//     Expir:new FormControl('',[Validators.required]),
//   }

// checkout(){
//   this.visa.checkVisa(this.VisaForm.controls['Cvv'].value,)
// }



}
