import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private http:HttpClient) { }
  feature: any = []
  getAll(){
    
    this.http.get('https://localhost:44324/api/Feature/GetFeatures').subscribe((res)=>{
    this.feature=res;

    },err=>{
    
    })

  }

  createService(service:any){
    this.http.post('https://localhost:44324/api/Feature/CreateFeature',service).subscribe((result) =>{

    },Erorr =>{

    })
  }

}
