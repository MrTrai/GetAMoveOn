import { Component, OnInit } from '@angular/core';
import {ClientServiceService} from "../service/client-service.service";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private client$$: ClientServiceService) { }

  ngOnInit() {
  }

}
