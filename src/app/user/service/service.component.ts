import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FeatureService } from 'src/app/Services/feature.service';
import { VisaService } from 'src/app/Services/visa.service';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  VisaForm:FormGroup = new FormGroup(
    {
      Cardnum:new FormControl('',[Validators.required]),
      Expir:new FormControl('',[Validators.required]),
    })
  stars: number[] = [1, 2, 3, 4, 5];
  selectedValue: number=0;
  constructor(public featureService : FeatureService,public visa :VisaService) { }

  ngOnInit(): void {
    debugger;
    this.featureService.getAll();
    this.visa.getAll();

  }
  countStar(star:any) {
    this.selectedValue = star;
    console.log('Value of star', star);
  }


checkout(cost:any){
  debugger;
  this.visa.checkVisa(this.VisaForm.controls['Cardnum'].value,cost)
}

}
