import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from "../service/client-service.service";
import {Doctor, User} from "../@types/aceso";
import {DoctorServiceService} from "../service/doctor-service.service";

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  constructor(private doctors$$: DoctorServiceService, private user$$: ClientServiceService) { }

  ngOnInit() {
    const doctor1: Doctor = {
      houseHoldIDList: ['abx'],
      name: 'Mai',
      email: 'Mai@yahoo.com',
      profession: 'Doctor',
      gender: 'Female'
    };
    const doctor2: Doctor = {
      houseHoldIDList: ['abx'],
      name: 'An',
      email: 'An@yahoo.com',
      profession: 'Doctor',
      gender: 'Male'
    };
    const doctor3: Doctor = {
      houseHoldIDList: ['abx'],
      name: 'BEDE',
      email: 'BEDE@yahoo.com',
      profession: 'Doctor',
      gender: 'BEDE'
    };
    const user1: User = {
      userID: '',
      name: 'a',
      email:'a@gmail.com'
    };
    const user2: User = {
      userID: '',
      name: 'b',
      email:'b@gmail.com'
    };
    const user3: User = {
      userID: '',
      name: 'c',
      email:'c@gmail.com'
    };
    // console.log(this.user$$.getUser(user1).subscribe((snaps: any[]) => {
    //   let userVal;
    //   let userKey;
    //   snaps.forEach((snap, indx) => {
    //     userVal = snap.payload.val();
    //     userKey = snap.key;
    //     if (userVal.email == user2.email) {
    //       console.log('True');
    //     }
    //   })
    // }));
    // this.doctor$$.pushDoctor(doctor1);
    // this.doctor$$.pushDoctor(doctor2);
    // this.doctor$$.pushDoctor(doctor3);
    // this.doctor$$.removeDoctor(doctor1);
    // this.doctor$$.updateDoctor(doctor3,doctor1);

    const user4: User = {
      userID: '',
      name: 'd',
      email:'d@gmail.com'
    };
    this.user$$.pushUser(user1);
    this.user$$.pushUser(user2);
    this.user$$.pushUser(user3);
    this.user$$.pushUser(user4);



  }

}
