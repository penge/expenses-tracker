import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const authService: AuthService = inject(AuthService);
  if (authService.isLoggedIn()) {
    return true;
  };

  const router = inject(Router);
  return router.parseUrl('/login');
};
