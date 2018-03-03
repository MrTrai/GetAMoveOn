import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Doctor, User} from "../@types/aceso";

@Injectable()
export class ClientServiceService {

  constructor(private db: AngularFireDatabase){}

  getUserProfile(user: User) {
    this.db.list('users', (ref) => {
      return ref
        .orderByChild('name')
        .equalTo(user.name);
    }).snapshotChanges().subscribe((snaps: any[]) => {
      let userVal;
      let userKey;
      snaps.forEach((snap, indx) => {
        userVal = snap.payload.val();
        userKey = snap.key;
        if (userVal.email == user.email) {// only update matching email
          return userVal.userProfile;
        }
      })
    });
  }
  getAllUser() {
    return this.db.list('users').snapshotChanges();
  }

  pushUser(user: User) {
    // Insert User to firebase
    this.db.list('users').push(user).then((data) => {
      //set key
      this.db.list('users', (ref) => {
        return ref.orderByChild('name').equalTo(user.name);
      }).snapshotChanges().subscribe((userSnapShots: any[]) => {
        userSnapShots.forEach((user, indx) => {
          if (!user.payload.val().userID) {
            this.db.list('users').update(user.key, {userID: user.key});
          }
        });
      });
    });
  }

  updateHouseholdList() {
    this.db.list('users', (ref) =>{
      return ref.orderByChild('householdID');
    }).snapshotChanges().subscribe((userSnapShots: any[]) => {
      userSnapShots.forEach((user, indx) => {
        if (!user.payload.val().userID) {
          this.db.list('users').update(user.key, {userID: user.key});
        }
      });
    });

  }

  getUser(userID: string) {
    this.db.list('users', (ref) => {
      return ref
        .orderByChild('userID')
        .equalTo(userID);
    }).snapshotChanges();
  }

  getData(user: User) {
    this.db.list('users', (ref) => {
      return ref
        .orderByChild('name')
        .equalTo(user.name);
    }).snapshotChanges().subscribe((snaps: any[]) => {
      let userVal;
      let userKey;
      snaps.forEach((snap, indx) => {
        userVal = snap.payload.val();
        userKey = snap.key;
        if (userVal.email == user.email) {// only update matching email
          return userVal.data;
        }
      })
    });
  }

  getHealthStatus(user: User) {
    this.db.list('users', (ref) => {
      return ref
        .orderByChild('name')
        .equalTo(user.name);
    }).snapshotChanges().subscribe((snaps: any[]) => {
      let userVal;
      let userKey;
      snaps.forEach((snap, indx) => {
        userVal = snap.payload.val();
        userKey = snap.key;
        if (userVal.email == user.email) {// only update matching email
          return userVal.healthStatus;
        }
      })
    });
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
