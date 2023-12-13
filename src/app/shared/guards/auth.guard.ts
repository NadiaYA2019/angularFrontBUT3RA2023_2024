import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let authService = inject(AuthService);
  let router = inject(Router);

  return authService.isAdmin().then((authentifie) => {
    if (authentifie) {
      console.log('Vous êtes admin, navigation autorisee');
      return true;
    } else {
      console.log("Vous n'êtes pas admin, navigation non autorisee");
      router.navigate(['/home']);
      return false;
    }
  });
};
