import { Component, OnInit } from '@angular/core';
import { ReportService } from 'src/app/Services/report.service';
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-manage-report',
  templateUrl: './manage-report.component.html',
  styleUrls: ['./manage-report.component.css']
})
export class ManageReportComponent implements OnInit {

  constructor(public report:ReportService,public userService : UserService) { }

  ngOnInit(): void {
    this.report.getAllUserReport();
  }
  changeBlockStatus(loginId:number,blockStatus:number){
    console.log(loginId);
    this.userService.changeBlockUserStatus(loginId,blockStatus);
  }

}
