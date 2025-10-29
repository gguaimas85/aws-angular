import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CognitoServiceService } from '../services/cognito-service.service';

@Component({
  selector: 'app-new-password',
  imports: [ FormsModule ],
  templateUrl: './new-password.component.html',
  styleUrl: './new-password.component.css',
})
export class NewPasswordComponent {
  currentpassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  constructor(private authService: CognitoServiceService) {}

  confirmPasswordReset() {
    this.authService.changeNewPassword(
      this.currentpassword,
      this.newPassword,
      this.confirmPassword
    );
  }
}
