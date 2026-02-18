import { Router } from '@angular/router';
import { inject } from '@angular/core';

export class App {
  private router = inject(Router);

  get isLoginPage(): boolean {
    return this.router.url === '/login';
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}