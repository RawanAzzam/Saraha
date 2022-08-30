import { Component, OnInit } from '@angular/core';
import { FeatureService } from 'src/app/Services/feature.service';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number=0;
  constructor(public featureService : FeatureService) { }

  ngOnInit(): void {
    this.featureService.getAll();

  }
  countStar(star:any) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }

}
