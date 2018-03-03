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

  pushHousehold(household: HouseHold) {
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
        if(Val.headOfHousehold = household.headOfHousehold ) {
          return
        }
        return this.db.list('household').push(household);
      })
    });
  }

  updateHousehold(household: HouseHold, newHousehold: HouseHold) {

    this.db.list('household', (ref) => {
      return ref
        .orderByChild('headOfHouseHold')
        .equalTo(household.headOfHousehold);
    }).snapshotChanges().subscribe((snaps: any[]) => {
      let Val;
      let Key;
      snaps.forEach((snap, indx) => {
        Val = snap.payload.val();
        Key = snap.key;
          this.db.list('household').set(Val,newHousehold);

      })
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
