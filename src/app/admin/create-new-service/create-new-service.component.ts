import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeatureService } from 'src/app/Services/feature.service';

@Component({
  selector: 'app-create-new-service',
  templateUrl: './create-new-service.component.html',
  styleUrls: ['./create-new-service.component.css']
})
export class CreateNewServiceComponent implements OnInit {

  constructor(private featureService : FeatureService) { }

  createService:FormGroup = new FormGroup({
    FeatureName:new FormControl('',Validators.required),
    FeaturePrice:new FormControl('',Validators.required),
    FeatureDuration:new FormControl('',Validators.required),})
  ngOnInit(): void {
  }

  CreateService(){
this.featureService.createService(this.createService.value);
  }
}
