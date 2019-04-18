import { Component, OnInit } from '@angular/core';
//  import { Event, Router, NavigationStart, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showLoadingIndicator = true;
  title = 'new word';

  constructor() {
    // this._router.events.subscribe((routerEvent: Event) => {

    //   if (routerEvent instanceof NavigationStart) {
    //     console.log('navigation started');
    //     this.showLoadingIndicator = true;
    //   }

    //   if (routerEvent instanceof NavigationEnd) {
    //     console.log('navigation ended');
    //     this.showLoadingIndicator = false;
    //   }

    // });
  }



}
