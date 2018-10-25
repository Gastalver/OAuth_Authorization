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

  userInfo = { 'name': '', 'email': '', 'imageUrl': '' };
  access_token = '';
  files = [];

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

  /**
   * Initialize details
   */
  initializeDetails() {
    this.access_token = this.cookieService.get('access_token');
    this.userInfo.name = this.cookieService.get('name');
    this.userInfo.email = this.cookieService.get('email');
    this.userInfo.imageUrl = this.cookieService.get('imageUrl');
  }

  /**
   * Load files in drive using access token
   */
  getGoogleDriveDetails() {
    const url = 'https://www.googleapis.com/drive/v2/files?access_token=' + this.access_token;
    this.http.get(url).subscribe((res: any) => {
      this.files = res.items;
      console.log(this.files);
    }, (err) => {
      console.log(err);
      alert(err.message);
    });
  }

  clearCookies() {

  }

  logout() {

    this.router.navigate(['/login']);
  }
}
