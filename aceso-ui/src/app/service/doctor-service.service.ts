import { Injectable } from '@angular/core';
import {Doctor} from "../@types/aceso";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class DoctorServiceService {

  constructor(private db: AngularFireDatabase) { }

  getHouseholdList(){
    return this.db.list('Households').snapshotChanges();
  }

  retrieveDoctor(doctor: Doctor) {
    // Retrieve Doctor from Firebase
  }

  pushDoctor(doctor: Doctor) {
    // Insert Doctor to firebase
    this.db.list('doctor').push(doctor);
  }

  updateDoctor(doctor: Doctor, newDoctor: Doctor) {
    // Update Doctor in firebase

  }

  removeDoctor(doctor: Doctor) {
    // remove Doctor in firebase
  }


  getProfession() {

  }
}
