import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const recepcionGuard: CanActivateFn = () => {
  const token = localStorage.getItem('tokenAccess');
  const router = inject(Router);
  if (token === 'axRecepcion') {
    return true;
  }
  router.navigate(['login']);
  return false;
};
