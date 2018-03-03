import { Component, OnInit } from '@angular/core';
import {FirebaseApiService} from "../service/firebase-api.service";

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.css']
})
export class DoctorComponent implements OnInit {

  constructor(private firebase$$: FirebaseApiService) { }

  ngOnInit() {
  }

}
