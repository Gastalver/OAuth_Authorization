import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'OAuthAuthorization';

  constructor(
    private cookieService: CookieService,
    private router: Router
  ) {

  }

  setRootPage() {
    const tokenValue = this.cookieService.get('TokenID');
    if (tokenValue) {
      this.router.navigate(['/home']);
    } else {
      this.router.navigate(['/']);
    }
  }
}
