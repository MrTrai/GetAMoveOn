import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";

interface Doctor {
  houseHoldList: string[],
  name: string,
  profession: string,
  gender: string
}

@Injectable()
export class ClientServiceService {

  constructor(private db: AngularFireDatabase) {
  }


  getName() {
    return this.db.list('handsome').snapshotChanges();
  }

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
