import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { AboutUsService } from 'src/app/Services/about-us.service';
import { HomeService } from 'src/app/Services/home.service';

@Component({
  selector: 'app-manage-home',
  templateUrl: './manage-home.component.html',
  styleUrls: ['./manage-home.component.css']
})
export class ManageHomeComponent implements OnInit {

  constructor(public homeService:HomeService,public aboutUsService:AboutUsService) { }

 

  ngOnInit(): void {
    this.homeService.getHome();
    this.aboutUsService.getAboutUs();
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
