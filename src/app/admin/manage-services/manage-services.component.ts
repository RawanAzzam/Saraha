import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { FeatureService } from 'src/app/Services/feature.service';
import { CreateNewServiceComponent } from '../create-new-service/create-new-service.component';

@Component({
  selector: 'app-manage-services',
  templateUrl: './manage-services.component.html',
  styleUrls: ['./manage-services.component.css']
})
export class ManageServicesComponent implements OnInit {

  constructor(public featureService : FeatureService,private dialog:MatDialog) { }
  @ViewChild('calldeleteDailog') calldeleteDailog! :TemplateRef<any>;
  @ViewChild('callupdateDailog') callupdateDailog2! :TemplateRef<any>; 
   updateForm:FormGroup=new FormGroup({
    featureId:new FormControl(),
    featureName:new FormControl(),
    featurePrice:new FormControl(),
    featureDuration:new FormControl(),
    // enddate:new FormControl(),
     imagePath:new FormControl()
  })
  ngOnInit(): void {
    this.featureService.getAll();
  }
  deleteservice(id:number)
  {
    const dialogVal= this.dialog.open(this.calldeleteDailog);
    dialogVal.afterClosed().subscribe((result)=>{
      if(result!=undefined)
        {
          if(result=='yes')
          
          this.featureService.deleteService(id);
        else (result=='no')
        console.log("Thank you");
             }
    })
   
  }
  CreateNewSevice(){
    this.dialog.open(CreateNewServiceComponent);
  }

  p_data:any={};
  updateDailog(obj:any){
    this.p_data={
      featureId:obj.featureId,
      featureName:obj.featureName,
    featurePrice:obj.featurePrice,
    featureDuration:obj.featureDuration,
    // enddate:obj.enddate,
    imagePath:obj.imagePath
    }
    console.log(this.p_data);
    this.updateForm.controls['featureId'].setValue(this.p_data.featureId); 
    
    this.dialog.open(this.callupdateDailog2)
    
  }
  updateService(){
    debugger
    this.featureService.UpdateService(this.updateForm.value);
  }

  uploadImage(file:any){
    if(file.length == 0){
     return
    }
 
    let fileToUpload = <File>file[0];
    const formData = new FormData();
    formData.append('file',fileToUpload,fileToUpload.name);
    this.featureService.uploadFeatureImage(formData);
   }

}
