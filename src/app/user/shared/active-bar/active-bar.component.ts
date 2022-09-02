import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/Services/user.service';
import { UserProfileComponent } from '../../user-profile/user-profile.component';

@Component({
  selector: 'app-active-bar',
  templateUrl: './active-bar.component.html',
  styleUrls: ['./active-bar.component.css']
})
export class ActiveBarComponent implements OnInit {

  constructor(public active:UserService) { }

  ngOnInit(): void {

    this.active.getActivePepole();
  }


  
}
