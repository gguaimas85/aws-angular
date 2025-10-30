import { Component, OnInit } from '@angular/core';
import { CognitoServiceService } from '../../../services/cognito-service.service';
import { ConectionApiService } from '../../../services/conection-api.service';

@Component({
  selector: 'app-home-admin',
  imports: [],
  templateUrl: './home-admin.component.html',
  styleUrl: './home-admin.component.css',
})
export class HomeAdminComponent implements OnInit {
  constructor(
    private authService: CognitoServiceService,
    private conAPI: ConectionApiService
  ) {}

  logOut() {
    this.authService.logOut();
  }

  getallProducts() {
    console.log(this.conAPI.getProductsAPI());
  }

  ngOnInit(): void {
    this.conAPI.getProductsAPI().subscribe({
      next: (data) => {
        console.log(data);
      },
    });
  }
}
