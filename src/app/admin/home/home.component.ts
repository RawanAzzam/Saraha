import { Component, OnInit } from '@angular/core';
import { ContactUsService } from 'src/app/Services/contact-us.service';
import { FeatureService } from 'src/app/Services/feature.service';
import { MessageService } from 'src/app/Services/message.service';
import { PostService } from 'src/app/Services/post.service';
import { PurchaseService } from 'src/app/Services/purchase.service';
import { ReportService } from 'src/app/Services/report.service';
import { UserService } from 'src/app/Services/user.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor( public userservice:UserService , public contactUs:ContactUsService ,public report :ReportService,
    public post : PostService,public order:PurchaseService,public message:MessageService,public featureService:FeatureService) { }
//  MessageCount:number = this.message.getMessages().length;
  ngOnInit(): void {
     this.userservice.getAllLoginUsers();
   
   this.contactUs.GetAll();
   this.userservice.getAll();

   this.report.getAllUserReport();
   this.post.getAll();
   this.order.GetAll();
   this.featureService.getAll();
   this.message.getAllMessages();
   this.userservice.getActivePepole();
   this.order.GetOrders();

  }

}
