import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-doctor-dashboard',
  templateUrl: './doctor-dashboard.component.html',
  styleUrls: ['./doctor-dashboard.component.css']
})
export class DoctorDashboardComponent implements OnInit {
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
