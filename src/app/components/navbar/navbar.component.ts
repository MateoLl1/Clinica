// navbar.component.ts
import { Component, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { takeUntil, filter } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {
  private ngUnsubscribe = new Subject();
  private shouldReset = false;

  constructor(private router: Router) {
    this.router.events
      .pipe(
        filter((event): event is NavigationEnd => event instanceof NavigationEnd),
        takeUntil(this.ngUnsubscribe)
      )
      .subscribe((event: NavigationEnd) => {
        // Verificar si el componente debe reiniciarse en cada cambio de navegación
        if (this.shouldReset) {
          // Realizar acciones de reinicio aquí
          console.log('Navbar reiniciado');

          // Reiniciar la bandera después de realizar acciones de reinicio
          this.shouldReset = false;
        }
      });
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next(1);
    this.ngUnsubscribe.complete();
  }

  navegacionNavbar(id: number) {
    switch (id) {
      case 0:
        this.router.navigate(['home']);
        break;
      case 1:
        this.router.navigate(['publicidad']);
        break;
      default:
        this.router.navigate(['home']);
        break;
    }
  }

  reiniciarComponente() {
    // Activar el reinicio del componente
    this.shouldReset = true;
  }

  // Método que indica si el componente debe reiniciarse
  // Esto se puede llamar en la plantilla para realizar acciones condicionales
  debeReiniciarComponente(): boolean {
    return this.shouldReset;
  }
}
