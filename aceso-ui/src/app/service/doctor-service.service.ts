import { Injectable } from '@angular/core';
import {Doctor} from "../@types/aceso";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class DoctorServiceService {

  constructor(private db: AngularFireDatabase) { }

  getHouseholdList(){
    return this.db.list('houseHoldList').snapshotChanges();
  }

  retrieveDoctor(doctor: Doctor) {
    // Retrieve Doctor from Firebase
    this.db.list('doctor').snapshotChanges();
  }

  pushDoctor(doctor: Doctor) {
    // Insert Doctor to firebase
    this.db.list('doctor').push(doctor);
  }

  updateDoctor(doctor: Doctor, newDoctor: Doctor) {
    // Update Doctor in firebase
    this.db.list('doctor', (ref) => {
      return ref
        .orderByChild('name')
        .equalTo(doctor.name); // get all doctor name == doctor.name
    }).snapshotChanges().subscribe((snaps: any[]) => {
      let docVal;
      let docKey;
      snaps.forEach((snap, indx) => {
        docVal = snap.payload.val();
        docKey = snap.key;
        if (docVal.email == doctor.email) {// only update matching email
          //update this doctor
          this.db.list('doctor').set(docKey,newDoctor);
        }
      })
    });
  }

  removeDoctor(doctor: Doctor) {
    // remove Doctor in firebase
    this.db.list('doctor', (ref) => {
      return ref
        .orderByChild('name')
        .equalTo(doctor.name); // get all doctor name == doctor.name
    }).snapshotChanges().subscribe((snaps: any[]) => {
      let docVal;
      let docKey;
      snaps.forEach((snap, indx) => {
        docVal = snap.payload.val();
        docKey = snap.key;
        if (docVal.email == doctor.email) {// only remove matching email
          //remove this doctor
          this.db.list('doctor').remove(docKey);
        }
      })
    });
  }
  getProfession() {
    this.db.list('profession').snapshotChanges();
  }
}
