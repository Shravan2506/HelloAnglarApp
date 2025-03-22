
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HelloWorld';
  logoUrl = 'https://www.bridgelabz.com/assets/images/BridgeLabz%20New%20Logo.svg';

  openBridgeLabz() {
    window.open('https://www.bridgelabz.com', '_blank');
  }
}
