import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-side',
  templateUrl: './client-side.component.html',
  styleUrls: ['./client-side.component.css']
})
export class ClientSideComponent implements OnInit {
  constructor() { }
  foods = [
    {value: 'steak-0', viewValue: 'Weight Measure'},
    {value: 'pizza-1', viewValue: 'Blood Pressure'},
    {value: 'tacos-2', viewValue: 'Thermometer'};
  ];

  ngOnInit() {
  }


}
