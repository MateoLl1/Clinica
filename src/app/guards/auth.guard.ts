import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (): boolean => {
  const router = inject(Router);
  const token = localStorage.getItem('tokenAccess');
  console.log(token);
  if (token === 'axAdmin') {
    return true;
  }
  if (token === 'axMedico') {
    router.navigate(['/nosotros']);
    return false;
  }
  if (token === 'axRecepcion') {
    router.navigate(['/home']);
    return false;
  }
  router.navigate(['/login']);
  return false;
};
