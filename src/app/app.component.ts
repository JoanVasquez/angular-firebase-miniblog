import { Component } from '@angular/core';
//10 min
@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  title = 'ng-blog';
}
