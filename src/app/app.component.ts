
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  userName: string = '';  
  errorMessage: string = ''; 

  validateName() {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/;  
    if (!namePattern.test(this.userName)) {
      this.errorMessage = "Name must start with uppercase & have at least 3 letters!";
    } else {
      this.errorMessage = ''; 
    }
  }
}
