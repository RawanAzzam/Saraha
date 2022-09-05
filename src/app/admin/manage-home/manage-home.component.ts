import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';
import { AboutUsService } from 'src/app/Services/about-us.service';
import { AddsService } from 'src/app/Services/adds.service';
import { FeatureService } from 'src/app/Services/feature.service';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-manage-home',
  templateUrl: './manage-home.component.html',
  styleUrls: ['./manage-home.component.css']
})
export class ManageHomeComponent implements OnInit {

  constructor(public homeService:HomeService,public aboutUsService:AboutUsService, public addsService:AddsService,private dialog:MatDialog) { }

 deleteAdd(id:number){
  debugger;
this.addsService.deleteAdd(id);
 }
 @ViewChild('callupdateDailog') callupdateDailog2! :TemplateRef<any>; 
  @ViewChild('callCreateDailog') callCreateDailog! :TemplateRef<any>; 
  createForm:FormGroup=new FormGroup({
    name:new FormControl(),
    price:new FormControl(),
    addsDate:new FormControl(),
    discount:new FormControl(),
    imagePath:new FormControl()
   });
   updateForm:FormGroup=new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    price:new FormControl(),
    discount:new FormControl(),
    addsDate:new FormControl(),
    imagePath:new FormControl()
  })

  createAdd(){
    debugger;
  this.addsService.createAdd(this.createForm.value)
  }
  createthis(){
    debugger;
    this.dialog.open(this.callCreateDailog)

  }
  
  p_data:any={};
  updateDailog(obj:any){
    console.log(obj);
    this.p_data={
      id:obj.id,
      name:obj.name,
    price:obj.price,
    addsDate:obj.addsDate,
    discount:obj.discount,
    imagePath:obj.imagePath
    
    }
    console.log(this.p_data);
    this.updateForm.controls['id'].setValue(this.p_data.id); 
    
    this.dialog.open(this.callupdateDailog2)
    
  }
  updateAdd(){
    this.updateForm.value.imagePath = this.p_data.imagePath;
    this.addsService.UpdateAdd(this.updateForm.value);
  }

  uploadAddImage(file:any){
    if(file.length == 0){
     return
    }
    debugger;
     console.log(file);
    let fileToUpload = <File>file[0];
    const formData = new FormData();
    formData.append('file',fileToUpload,fileToUpload.name);
    this.addsService.uploadAddsImage(formData);
   }








  ngOnInit(): void {
    this.homeService.getHome();
    this.aboutUsService.getAboutUs();
    this.addsService.GetAll();
  }
   ///////////////////////////// Manage Home Page 
  updateHomeForm : FormGroup = new FormGroup(
    {
      homeid:new FormControl(),
      logo:new FormControl(),
      slider1:new FormControl(),
      slider2:new FormControl(),
      description1:new FormControl(),
      description2:new FormControl(),
      email:new FormControl(),
      phoneNumber:new FormControl(),
      address:new FormControl(),
      member1_Name:new FormControl(),
      member2_Name:new FormControl(),
      member3_Name:new FormControl(),
      member4_Name:new FormControl(),
      member1_Image:new FormControl(),
      member2_Image:new FormControl(),
      member3_Image:new FormControl(),
      member4_Image:new FormControl(),
    }
  )
  uploadImage(file:any,index:number){
    if(file.length == 0){
     return
    }
    debugger;
     console.log(file);
    let fileToUpload = <File>file[0];
    const formData = new FormData();
    formData.append('file',fileToUpload,fileToUpload.name);
    this.homeService.uploadImage(formData,index);
   }

   updateHome(){
    debugger;
    console.log(this.updateHomeForm.value)

    this.updateHomeForm.value.logo = this.homeService.home.logo
    this.updateHomeForm.value.slider1 = this.homeService.home.slider1
    this.updateHomeForm.value.slider2 = this.homeService.home.slider2
    this.updateHomeForm.value.member1_Image = this.homeService.home.member1_Image
    this.updateHomeForm.value.member2_Image = this.homeService.home.member2_Image
    this.updateHomeForm.value.member3_Image = this.homeService.home.member3_Image
    this.updateHomeForm.value.member4_Image = this.homeService.home.member4_Image
    this.updateHomeForm.value.homeid = this.homeService.home.homeid
    
    this.homeService.updateHome(this.updateHomeForm.value);
   }


    ////////////////////////// Manage About Us Page 
    updateAboutUsForm : FormGroup = new FormGroup(
      {
        aboutusid : new FormControl(),
        title : new FormControl(),
        subtitle : new FormControl(),
        imagepath : new FormControl(),
        feature1 : new FormControl(),
        feature2 : new FormControl(),
        feature3 : new FormControl(),
        feature1_Image : new FormControl(),
        feature2_Image : new FormControl(),
        feature3_Image : new FormControl(),
      }
    )
 
    updateAboutUs(){
      debugger;
      this.updateAboutUsForm.value.aboutusid = this.aboutUsService.aboutUs.aboutusid
      this.updateAboutUsForm.value.imagepath = this.aboutUsService.aboutUs.imagepath
      this.updateAboutUsForm.value.feature1_Image = this.aboutUsService.aboutUs.feature1_Image
      this.updateAboutUsForm.value.feature2_Image = this.aboutUsService.aboutUs.feature2_Image
      this.updateAboutUsForm.value.feature3_Image = this.aboutUsService.aboutUs.feature3_Image
         this.aboutUsService.updateAboutUs(this.updateAboutUsForm.value);
    }
   uploadImageAboutUs(file:any,index:number){
    if(file.length == 0){
      return
     }
     debugger;
      console.log(file);
     let fileToUpload = <File>file[0];
     const formData = new FormData();
     formData.append('file',fileToUpload,fileToUpload.name);
     this.aboutUsService.uploadImage(formData,index);
   }

}
