import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from "../service/client-service.service";
import {Doctor, HouseHold, User, UserData, UserProfile} from "../@types/aceso";
import {DoctorServiceService} from "../service/doctor-service.service";
import {HouseholdService} from "../service/household.service";

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {

  constructor(private doctors$$: DoctorServiceService, private user$$: ClientServiceService,
              private household$$: HouseholdService) { }

  ngOnInit() {

    const doctor1: Doctor = {
      doctorID : '',
      houseHoldIDList: ['a','b','c'],
      name: 'Dr. Hoff',
      email: 'Hoff@yahoo.com',
      profession: 'Doctor',
      gender: 'Female'
    };


    const household1 : HouseHold = {
      householdID: '',
      membersList: ['a','b','c'],
        headOfHousehold: 'An Tran',
        doctorID: 'drID'
    }
    const household2 : HouseHold = {
      householdID: '',
      membersList: ['a','b','c'],
      headOfHousehold: 'Trai Tran',
      doctorID: 'drID'
    }
    const household3 : HouseHold = {
      householdID: '',
      membersList: ['a','b','c'],
      headOfHousehold: 'Mai Pham',
      doctorID: 'drID'
    }
    const user1 : User = {
      userID: '',
      householdID: 'householdId',
      personalDoctorID: "drID",
      name: "Taian",
      isHeadOfHouseHold: true,
      email: "at@gmail.com"
    }
    const user2 : User = {
      userID: '',
      householdID: 'householdId',
      personalDoctorID: "drID",
      name: "TKIe",
      isHeadOfHouseHold: true,
      email: "ttran@gmail.com"
    }
    const user3 : User = {
      userID: '',
      householdID: 'householdId',
      personalDoctorID: "drID",
      name: "TuanB",
      isHeadOfHouseHold: true,
      email: "at@gmail.com"
    }
    const user4 : User = {
      userID: '',
      householdID: 'householdId',
      personalDoctorID: "drID",
      name: "Pham",
      email: "at@gmail.com"
    }
    const user5 : User = {
      userID: '',
      householdID: 'householdId',
      personalDoctorID: "drID",
      name: "ANt",
      email: "at@gmail.com"
    }
    const user6 : User = {
      userID: '',
      householdID: 'householdId',
      personalDoctorID: "drID",
      name: "Asea",
      isHeadOfHouseHold: true,
      email: "at@gmail.com"
    }
    const user7 : User = {
      userID: '',
      householdID: 'householdId',
      personalDoctorID: "drID",
      name: "An Tran",
      isHeadOfHouseHold: true,
      email: "at@gmail.com"
    }
    const user8 : User = {
      userID: '',
      householdID: 'householdId',
      personalDoctorID: "drID",
      name: "An Tran",
      email: "at@gmail.com"
    }
    const user9 : User = {
      userID: '',
      householdID: 'householdId',
      personalDoctorID: "drID",
      name: "An Tran",
      email: "at@gmail.com"
    }

    this.household$$.pushHousehold(household1);





  }

}
