import { Injectable } from '@angular/core';
import {Doctor, HouseHold} from "../@types/aceso";
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class HouseholdService {

  constructor(private db: AngularFireDatabase) { }

  getAllHousehold() {
    return this.db.list('household').snapshotChanges();
  }

  getHeadOfHousehold(household: HouseHold) {
    this.db.list('household', (ref) => {
      return ref
        .orderByChild('headOfHousehold')
        .equalTo(household.headOfHousehold);
    }).snapshotChanges().subscribe((snaps: any[]) => {
      let Val;
      let Key;
      snaps.forEach((snap, indx) => {
        Val = snap.payload.val();
        Key = snap.key;
        return Val.headOfHouseHold;
      })
    });
  }

  getHouseholdMembersList(household: HouseHold) {
    this.db.list('household', (ref) => {
      return ref
        .orderByChild('headOfHousehold')
        .equalTo(household.headOfHousehold);
    }).snapshotChanges().subscribe((snaps: any[]) => {
      let Val;
      let Key;
      snaps.forEach((snap, indx) => {
        Val = snap.payload.val();
        Key = snap.key;
        return Val.membersList;
      })
    });
  }

  getHousehold(household: HouseHold) {

    this.db.list('household', (ref) => {
      return ref
        .orderByChild('headOfHousehold')
        .equalTo(household.headOfHousehold);
    }).snapshotChanges().subscribe((snaps: any[]) => {
      let Val;
      let Key;
      snaps.forEach((snap, indx) => {
        Val = snap.payload.val();
        Key = snap.key;
          return Val;
      })
    });
  }

  pushHousehold(household: HouseHold, doctorID?: string) {
// Insert User to firebase
    this.db.list('household').push(household).then((data) => {
      //set key
      this.db.list('household', (ref) => {
        return ref.orderByChild('headOfHousehold').equalTo(household.headOfHousehold);
      }).snapshotChanges().subscribe((userSnapShots: any[]) => {
        userSnapShots.forEach((household, indx) => {
          if (!household.payload.val().userID) {
            this.db.list('household').update(household.key, {householdID: household.key});
          }
        });
      });
    });
  }


  removeHousehold(household: HouseHold) {

    this.db.list('household', (ref) => {
      return ref
        .orderByChild('household')
        .equalTo(household.headOfHousehold);
    }).snapshotChanges().subscribe((snaps: any[]) => {
      let Val;
      let Key;
      snaps.forEach((snap, indx) => {
        Val = snap.payload.val();
        Key = snap.key;
          this.db.list('household').remove(Val);
      })
    });
  }

}
