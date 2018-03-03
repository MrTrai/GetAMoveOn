import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import {Doctor} from "../@types/aceso";

@Injectable()
export class ClientServiceService {

  constructor(private db: AngularFireDatabase) {
  }


  getName() {
    return this.db.list('handsome').snapshotChanges();
  }

}
