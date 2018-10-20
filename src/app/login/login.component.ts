import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public auth2: any;

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  public clientInit() {
    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '336488202114-l5ldmipe7d7k37846hkra7fbjp90t8ri.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'https://www.googleapis.com/auth/drive.metadata.readonly'
      });
      this.attachSignin(document.getElementById('googleBtn'));
    });
  }

  /**
   * Sign in
   * @param element
   */
  public attachSignin(element) {
    this.auth2.attachClickHandler(element, {},
      (googleUser) => {
        console.log(googleUser);
        const profile = googleUser.getBasicProfile();
        console.log(googleUser.getAuthResponse());
        this.cookieService.set('TokenID', googleUser.getAuthResponse().id_token);
        this.cookieService.set('name', profile.getName());
        this.cookieService.set('email', profile.getEmail());
        this.router.navigate(['/home']);
      }, (error) => {
        alert(JSON.stringify(error, undefined, 2));
      });
  }

  ngAfterViewInit() {
    this.clientInit();
  }
}
