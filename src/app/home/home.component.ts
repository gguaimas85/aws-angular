import { Component } from '@angular/core';
import { CognitoServiceService } from '../services/cognito-service.service';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private authservice: CognitoServiceService) {}

  logOut() {
    this.authservice.logOut();
  }
}
