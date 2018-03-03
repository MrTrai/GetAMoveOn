import { Component, OnInit } from '@angular/core';
import {HighChartUtilService} from "../service/high-chart-util.service";
import {DoctorServiceService} from "../service/doctor-service.service";

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {
  heartRateOption: any;
  weightOption: any;
  bodyFatOption: any;
  tempOption: any;
  users = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  constructor(private doctor$$: DoctorServiceService,
              private chartUtil$$: HighChartUtilService) { }

  ngOnInit() {

    this.heartRateOption = this.chartUtil$$.getLineChartConfig()
      .setChartOptionTitle('Heart Rate')
      .setLegendOption({})
      .getNewOption();
    this.bodyFatOption = this.chartUtil$$.getLineChartConfig()
      .setChartOptionTitle('Body Fat')
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

  onUserChange($event: any) {
    console.log($event);
  }
}
