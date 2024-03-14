import { Component } from '@angular/core';
import { Router } from '@angular/router';
import validator from 'validator';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  private email = '';
  private password = '';

  loading = false;

  constructor(private authService: AuthService, private router: Router) {}

  setEmail(email: string) {
    this.email = email;
  }

  setPassword(password: string) {
    this.password = password;
  }

  canLogin(): boolean {
    return validator.isEmail(this.email) && this.password.length > 0;
  }

  login() {
    this.loading = true;

    this.authService.login(this.email, this.password).subscribe((loggedIn) => {
      if (!loggedIn) {
        this.loading = false;
        return;
      }

      this.router.navigate(['/home'], { replaceUrl: true });
    });
  }
}
