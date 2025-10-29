import { Injectable } from '@angular/core';
import {
  AuthenticationDetails,
  CognitoUser,
  CognitoUserPool,
} from 'amazon-cognito-identity-js';
import { Router } from '@angular/router';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root',
})
export class CognitoServiceService {
  userPool: any;
  cognitoUser: any;
  username: string = '';

  constructor(private router: Router) {}

  //Login
  login(emailaddress: string, password: string) {
    let authenticationDetails = new AuthenticationDetails({
      Username: emailaddress,
      Password: password,
    });

    let poolData = {
      UserPoolId: environment.cognitoUserPoolId,
      ClientId: environment.cognitoAppClientId,
    };

    this.username = emailaddress;
    this.userPool = new CognitoUserPool(poolData);
    let userData = { Username: emailaddress, Pool: this.userPool };
    this.cognitoUser = new CognitoUser(userData);

    this.cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: (result: any) => {
        let perfil = result.idToken.payload['profile'];
        console.log('Success Results : ', result.idToken.payload.profile);
        this.router.navigate(['/home/' + perfil]);
      },
      // Primer intento de inicio de sesion
      newPasswordRequired: () => {
        this.router.navigate(['/newPasswordRequire']);
      },
      onFailure: (error: any) => {
        console.log('error', error);
      },
    });
  }

  //First intento login - nuevo contraseña
  changeNewPassword(
    oldPassword: string,
    newPassword: string,
    confirmPassword: string
  ) {
    if (newPassword === confirmPassword) {
      this.cognitoUser.completeNewPasswordChallenge(
        newPassword,
        {},
        {
          onSuccess: () => {
            console.log('Reset Success');
            this.router.navigate(['/login']);
          },
          onFailure: () => {
            console.log('Reset Fail');
          },
        }
      );
    } else {
      console.log("Password didn't Match");
    }
  }

  //Cerrar sesion
  logOut() {
    let poolData = {
      UserPoolId: environment.cognitoUserPoolId,
      ClientId: environment.cognitoAppClientId,
    };
    this.userPool = new CognitoUserPool(poolData);
    this.cognitoUser = this.userPool.getCurrentUser();
    if (this.cognitoUser) {
      this.cognitoUser.signOut();
      this.router.navigate(['login']);
    }
  }
}
