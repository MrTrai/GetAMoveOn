import { Injectable } from '@angular/core';
import {Doctor} from "../@types/aceso";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class DoctorServiceService {

  constructor(private db: AngularFireDatabase) { }

  getHouseholdIDList(){
    return this.db.list('houseHoldIDList').snapshotChanges();
  }

  pushDoctor(doctors: ) {
    // Insert Doctor to firebase
    this.db.list('doctors').push(doctors).then((data) => {
      //set key
      this.db.list('doctors', (ref) => {
        return ref.orderByChild('name').equalTo(doctors.name);
      }).snapshotChanges().subscribe((userSnapShots: any[]) => {
        userSnapShots.forEach((doctors, indx) => {
          if (!doctors.payload.val().doctorID) {
            this.db.list('doctors').update(doctors.key, {doctorID: doctors.key});
          }
        });
      });
    });
  }

  updateDoctor(doctor: Doctor, newDoctor: Doctor) {
    // Update Doctor in firebase
    this.db.list('doctors', (ref) => {
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
          this.db.list('doctors').set(docKey,newDoctor);
        }
      })
    });
  }

  removeDoctor(doctor: Doctor) {
    // remove Doctor in firebase
    this.db.list('doctors', (ref) => {
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
          this.db.list('doctors').remove(docKey);
        }
      })
    });
  }
  getProfession() {
    this.db.list('profession').snapshotChanges();
  }
}
