import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(public userService:UserService,private route:Router) { }
  searchForm : FormGroup = new FormGroup(
    {
      username : new FormControl(),
      country : new FormControl(),
      gender : new FormControl()
    }
  )
  isSearch : boolean = false;
  ngOnInit(): void {
    // this.userService.getAll();
    this.userService.getAllLoginUsers();
  }
  
  search(){
    console.log(this.searchForm.value)
     this.userService.searchUser(this.searchForm.controls['username'].value,this.searchForm.controls['country'].value,
     this.searchForm.controls['gender'].value);
  }

  
  viewProfile(id:number){
    console.log("Hii")
    this.route.navigate(['user/viewProfile',id])
  }
}
