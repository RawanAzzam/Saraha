import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class FeatureService {

  constructor(private http:HttpClient) { }
  feature: any = []
  featureImage : any;

  getAll(){
    this.http.get('https://localhost:44324/api/Feature/GetFeatures').subscribe((res)=>{
    this.feature=res;
    },err=>{
    
    })

  }

  createService(service:any){
    service.ImagePath = this.featureImage.ImagePath;
    console.log(service);

    debugger;
    this.http.post('https://localhost:44324/api/Feature/CreateFeature',service).subscribe((result) =>{

    },Erorr =>{

    })
  }

  uploadFeatureImage(file : FormData){
    this.http.post('https://localhost:44324/api/Feature/CreateImagePath',file).subscribe((result) => {
      this.featureImage = result;
      console.log(this.featureImage);
    },err => {
      console.log(err)
    })
  
  }
  

}
