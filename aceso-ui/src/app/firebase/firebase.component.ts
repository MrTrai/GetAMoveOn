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
    const doctor: Doctor = {
      houseHoldList: ['abx'],
      name: 'Mai',
      profession: 'Doctor',
      gender: 'Female'
    };
    this.doctor$$.pushDoctor(doctor);
  }

}
