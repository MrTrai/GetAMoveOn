import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-side',
  templateUrl: './client-side.component.html',
  styleUrls: ['./client-side.component.css']
})
export class ClientSideComponent implements OnInit {
  constructor() { }
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  ngOnInit() {
  }


}
