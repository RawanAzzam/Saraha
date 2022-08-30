import { Component, OnInit,ViewChild } from '@angular/core';
import { ContactUsService } from 'src/app/Services/contact-us.service';
import { FeatureService } from 'src/app/Services/feature.service';
import { MessageService } from 'src/app/Services/message.service';
import { PostService } from 'src/app/Services/post.service';
import { PurchaseService } from 'src/app/Services/purchase.service';
import { ReportService } from 'src/app/Services/report.service';
import { UserService } from 'src/app/Services/user.service';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';

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
   this.featureService.FeatureName();
   this.featureService.FeatureTotalSales();

  }
// ********************************

@ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  // Pie
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      datalabels: {
        formatter: (value, ctx) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: this.featureService.servName,
    datasets:  [ {
      data: this.featureService.servSales,
    } ]
  };
  
  // pieChartLabels = this.featureService.servName;
//   pieChartData:any = [
//     { 
//         data: this.featureService.servSales
//     }
// ];
  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [ DatalabelsPlugin ];

  // events
  public chartClicked({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: ChartEvent, active: {}[] }): void {
    console.log(event, active);
  }









// **********************************

}
