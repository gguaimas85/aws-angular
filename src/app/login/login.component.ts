import { Component } from '@angular/core';
import { NgForm, FormsModule } from '@angular/forms';
import { CognitoServiceService } from '../services/cognito-service.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  emailaddress: string = '';
  password: string = '';

  constructor(private authService: CognitoServiceService) {}

  onSignIn(form: NgForm) {
    if (form.valid) {
      this.authService.login(this.emailaddress, this.password);
    }
  }
}
