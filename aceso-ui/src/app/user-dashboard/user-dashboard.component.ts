import {Component, OnInit, ViewChild} from '@angular/core';
import {HighChartUtilService} from "../service/high-chart-util.service";

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  @ViewChild('drawer') sideNav;

  constructor() {
  }

  ngOnInit() {
  }

  /**
   * Open Sidenav when mouse touches the browser left edge
   * @param event: Mouse movement event
   */
  onMouseMove(event) {
    if (event.x < 15) {
      this.sideNav.open();
    }
  }

}
