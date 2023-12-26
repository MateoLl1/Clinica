import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const medicoGuard: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('tokenAccess');
  if (token === 'axMedico') {
    return true;
  }
  router.navigate(['login']);
  return false;
};
