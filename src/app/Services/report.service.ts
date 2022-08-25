import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) { }
  reports : any = [{}]
  Report :any =[{}]
  getAllUserReport(){
    this.http.get('https://localhost:44324/api/Report/UserReport').subscribe((res)=>{
    this.reports=res;
    
    },err=>{
    
    })
  }
  getAllReport(){
    this.http.get('https://localhost:44324/api/Report/').subscribe((res)=>{
    this.Report=res;
    
    },err=>{
    
    })
  }
}
