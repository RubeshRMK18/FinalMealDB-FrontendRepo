import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth-service';
import { inject } from '@angular/core';

export const authGuardGuard: CanActivateFn = (route, state) => {


  const authService = inject(AuthService);
  // Check if the user is logged in
  if (authService.isloggedIn()) {
    return true;
  }
  // If not logged in, redirect to the login page
  const router = inject(Router);
  router.navigate(['/login']);
  return false;
};
