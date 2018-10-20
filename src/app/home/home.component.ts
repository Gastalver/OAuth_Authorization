import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

declare const gapi: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  GoogleAuth;
  userInfo = { 'name': '', 'email': '', 'imageUrl': '' };
  tokenValue = '';

  constructor(
    private cookieService: CookieService,
    private router: Router,
    private http: HttpClient,
  ) {
    this.initializeDetails();
    this.getGoogleDriveDetails();
  }


  ngOnInit() {
  }

  initializeDetails() {
    this.tokenValue = this.cookieService.get('TokenID');
    this.userInfo.name = this.cookieService.get('name');
    this.userInfo.email = this.cookieService.get('email');
    this.userInfo.imageUrl = this.cookieService.get('imageUrl');
  }

  getGoogleDriveDetails() {
    // this.GoogleAuth = gapi.auth2.getAuthInstance();
    // console.log(this.GoogleAuth);
    // const request = gapi.client.drive.about.get({'fields': 'user'});

    // request.execute(function(response) {
    //   console.log(response);
    // });
  }
}
