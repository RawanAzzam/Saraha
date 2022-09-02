import { Component, OnInit } from '@angular/core';
import { HomePageService } from '../Services/home-page.service';

@Component({
  selector: 'app-waed',
  templateUrl: './waed.component.html',
  styleUrls: ['./waed.component.css']
})
export class WaedComponent implements OnInit {

  constructor(public home:HomePageService) { }

  ngOnInit(): void {
  }
  

}
