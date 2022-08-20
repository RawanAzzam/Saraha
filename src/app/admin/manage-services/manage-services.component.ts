import { Component, OnInit } from '@angular/core';
import { FeatureService } from 'src/app/Services/feature.service';

@Component({
  selector: 'app-manage-services',
  templateUrl: './manage-services.component.html',
  styleUrls: ['./manage-services.component.css']
})
export class ManageServicesComponent implements OnInit {

  constructor(public featureService : FeatureService) { }

  ngOnInit(): void {
    this.featureService.getAll();
  }

}
