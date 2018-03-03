import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from "../service/client-service.service";
import {HighChartUtilService} from "../service/high-chart-util.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  heartRateOption: any;
  weightOption: any;
  tempOption: any;

  constructor(private client$$: ClientServiceService,
              private chartUtil$$: HighChartUtilService) { }

  ngOnInit() {
    this.heartRateOption = this.chartUtil$$.getLineChartConfig()
      .setChartOptionTitle('Heart Rate')
      .setLegendOption({})
      .getNewOption();
    this.weightOption = this.chartUtil$$.getLineChartConfig()
      .setChartOptionTitle('Weight')
      .setLegendOption({})
      .getNewOption();
    this.tempOption = this.chartUtil$$.getLineChartConfig()
      .setChartOptionTitle('Body Temperature')
      .setLegendOption({})
      .getNewOption();
  }

}
