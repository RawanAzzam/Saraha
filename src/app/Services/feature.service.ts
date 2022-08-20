import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private http:HttpClient) { }
  feature: any = []
  getAll(){
    //show spinner, 
    //hits API
    //show Toaster ==> 
    this.http.get('https://localhost:44324/api/Feature/GetFeatures').subscribe((res)=>{
    this.feature=res;

    },err=>{
    
    })

  }

}
