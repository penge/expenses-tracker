import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';

const delayMs = 2000;
const testUser = {
  email: 'test@sloneek.com',
  password: 'sloneek'
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private meKey = 'me';
  private isAuthenticated = false;

  constructor() {
    this.isAuthenticated = !!localStorage.getItem(this.meKey);
  }

  login(email: string, password: string): Observable<boolean> {
    if (email === testUser.email && password === testUser.password) {
      localStorage.setItem(this.meKey, testUser.email);
      this.isAuthenticated = true;
    }

    return of(this.isAuthenticated).pipe(delay(delayMs));
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  logout(): void {
    localStorage.removeItem(this.meKey);
    this.isAuthenticated = false;
  }
}
