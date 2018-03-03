import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from "../service/client-service.service";
import {Doctor} from "../@types/aceso";
import {DoctorServiceService} from "../service/doctor-service.service";

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  constructor(private doctor$$: DoctorServiceService) { }

  ngOnInit() {
    const doctor1: Doctor = {
      houseHoldList: ['abx'],
      name: 'Mai',
      email: 'Mai@yahoo.com',
      profession: 'Doctor',
      gender: 'Female'
    };
    const doctor2: Doctor = {
      houseHoldList: ['abx'],
      name: 'An',
      email: 'An@yahoo.com',
      profession: 'Doctor',
      gender: 'Male'
    };
    const doctor3: Doctor = {
      houseHoldList: ['abx'],
      name: 'BEDE',
      email: 'BEDE@yahoo.com',
      profession: 'Doctor',
      gender: 'BEDE'
    };
    // this.doctor$$.pushDoctor(doctor1);
    // this.doctor$$.pushDoctor(doctor2);
    // this.doctor$$.pushDoctor(doctor3);
    //this.doctor$$.removeDoctor(doctor1);
    // this.doctor$$.updateDoctor(doctor3,doctor1);

  }

}
