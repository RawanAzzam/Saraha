import { Component, OnInit } from '@angular/core';
import { FeatureService } from 'src/app/Services/feature.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  constructor(public featureService : FeatureService) { }

  ngOnInit(): void {
    this.featureService.getAll();

  }

}
