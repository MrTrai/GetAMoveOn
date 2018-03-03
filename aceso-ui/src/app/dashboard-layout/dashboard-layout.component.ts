import {Component, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  templateUrl: './dashboard-layout.component.html',
  styleUrls: ['./dashboard-layout.component.css']
})
export class DashboardLayoutComponent implements OnInit {
  @ViewChild('drawer') sideNav;
  constructor() { }

  ngOnInit() {
    this.sideNav.open();
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
