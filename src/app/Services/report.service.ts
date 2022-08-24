import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  constructor(private http:HttpClient) { }
  reports : any = [{}]
  getAllUserReport(){
    this.http.get('https://localhost:44324/api/Report/UserReport').subscribe((res)=>{
    this.reports=res;
    
    },err=>{
    
    })
  }
}
