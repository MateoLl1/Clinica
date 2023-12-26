import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const usuarioGuard: CanActivateFn = () => {
  const token = localStorage.getItem('tokenAccess');
  const router = inject(Router);
  if (token === 'axUsuario') {
    return true;
  }
  router.navigate(['login']);
  return false;
};
