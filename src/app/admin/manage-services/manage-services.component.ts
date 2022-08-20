import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FeatureService } from 'src/app/Services/feature.service';
import { CreateNewServiceComponent } from '../create-new-service/create-new-service.component';

@Component({
  selector: 'app-manage-services',
  templateUrl: './manage-services.component.html',
  styleUrls: ['./manage-services.component.css']
})
export class ManageServicesComponent implements OnInit {

  constructor(public featureService : FeatureService,public dialog : MatDialog) { }

  ngOnInit(): void {
    this.featureService.getAll();
  }

  CreateNewSevice(){
   this.dialog.open(CreateNewServiceComponent);
  }

}
