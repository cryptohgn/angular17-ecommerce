import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular178888';
  msg = 'Hello, welcome to this page'
  a= 10;
  b= 5;
  ans = this.a + this.b;
}
