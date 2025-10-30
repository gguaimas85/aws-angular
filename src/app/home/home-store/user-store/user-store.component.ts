import { Component } from '@angular/core';
import { CognitoServiceService } from '../../../services/cognito-service.service';

@Component({
  selector: 'app-user-store',
  imports: [],
  templateUrl: './user-store.component.html',
  styleUrl: './user-store.component.css'
})
export class UserStoreComponent {

  constructor(private authService: CognitoServiceService) {}

  logOut() {
    this.authService.logOut();
  }
}
