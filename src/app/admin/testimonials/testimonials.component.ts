import { Component, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TestimonialService } from 'src/app/Services/testimonial.service';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent implements OnInit {


  constructor(public Testimonial : TestimonialService,private dialog:MatDialog) { }
  @ViewChild('calldeleteDailog') calldeleteDailog! :TemplateRef<any>;
  @ViewChild('callupdateDailog') callupdateDailog2! :TemplateRef<any>; 
   updateForm:FormGroup=new FormGroup({
    testimonialid:new FormControl(),
    content:new FormControl(),
    stars:new FormControl(),
    is_Accepted:new FormControl(),
    // enddate:new FormControl(),
    userid:new FormControl()
  })
  p_data:any={};

  ngOnInit(): void {
    this.Testimonial.GetAll();
  }

  @Input()testimonialid:number| undefined;
  @Input()content:string| undefined;
  @Input()stars:number| undefined;
  @Input()userid:number| undefined;
  @Input()is_Accepted:string| undefined;

  deletetest(id:number)
  {
    const dialogVal= this.dialog.open(this.calldeleteDailog);
    dialogVal.afterClosed().subscribe((result)=>{
      if(result!=undefined)
        {
          if(result=='yes')
          
          this.Testimonial.deletetest(id);
        else (result=='no')
        console.log("Thank you");
             }
    })
   
  }
 

  updateDailog(obj:any){
    console.log(obj);
    this.p_data={
      testimonialid:obj.testimonialid,
      content:obj.content,
      stars:obj.stars,
      is_Accepted:obj.is_Accepted,
    // enddate:obj.enddate,
    userid:obj.userid
    }
    console.log(this.p_data);
    this.updateForm.controls['testimonialid'].setValue(this.p_data.testimonialid); 
    
    this.dialog.open(this.callupdateDailog2)
    
  }
  UpdateTest(){
    this.Testimonial.UpdateTest(this.updateForm.value);
  }

  // uploadImage(file:any){
  //   if(file.length == 0){
  //    return
  //   }
  //   debugger;
  //    console.log(file);
  //   let fileToUpload = <File>file[0];
  //   const formData = new FormData();
  //   formData.append('file',fileToUpload,fileToUpload.name);
  //   this.te.uploadFeatureImage(formData);
  //  }



}
