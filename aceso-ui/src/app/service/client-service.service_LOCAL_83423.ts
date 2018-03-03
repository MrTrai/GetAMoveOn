import { Injectable } from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";

@Injectable()
export class ClientServiceService {

  constructor(private db: AngularFireDatabase) { }


  getName() {
    return  this.db.list('handsome').snapshotChanges();
  }

}
