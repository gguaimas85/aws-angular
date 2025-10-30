import { Component } from '@angular/core';
import { CognitoServiceService } from '../../../services/cognito-service.service';

@Component({
  selector: 'app-home-admin',
  imports: [],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css'
})
export class HomeAdminComponent {

  constructor(private authService: CognitoServiceService) {}

  logOut() {
    this.authService.logOut();
  }
}
