import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const formAdGuard: CanActivateFn = (): boolean => {
  const token = localStorage.getItem('tokenAccess');
  const router = inject(Router);
  if (token === 'axAdmin') {
    return true;
  }
  router.navigate(['/home']);
  return false;
};
