import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/Services/report.service';

@Component({
  selector: 'app-manage-report',
  templateUrl: './manage-report.component.html',
  styleUrls: ['./manage-report.component.css']
})
export class ManageReportComponent implements OnInit {

  constructor(public report:ReportService) { }

  ngOnInit(): void {
    this.report.getAllUserReport();
  }

}
