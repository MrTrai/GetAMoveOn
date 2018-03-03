import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class ClientServiceService {

<<<<<<< HEAD
  constructor(private db: AngularFireDatabase) { }


  getName() {
    return  this.db.list('handsome').snapshotChanges();
=======
  constructor(private db: AngularFireDatabase) {
  }
  getUser() {
    return this.db.list('userProfile')
  }
  getMembersList() {
    return this.db.list('membersList').snapshotChanges();
  }

  getHeadOfHouseHold() {
    return this.db.list('headOfHouseHold').snapshotChanges();
>>>>>>> 5503f95d16cb7eba914bfa8b8f1662004bfd216f
  }

  getDoctorID(doctor: Doctor) {
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
          return docKey;
        }
      });
    });
  }
}




