import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private router: Router) { }

  setToken(token: string) {
    localStorage.setItem('token', token)
  }

  getToken() {
    return localStorage.getItem('token')
  }

  isLoggedIn() {
    return this.getToken() !== null
  }

  login(userInfo: {email: string, password: string}): Observable<string | boolean> {
    if(userInfo.email === 'admin@admin.com' && userInfo.password === 'admin123') {
      this.setToken('ndj2fAdr3gFai-fghVhfgw1rw57-rR3tnjDv5caDwq')
      return of(true)
    }
    return throwError(() => new Error('Failed Login'))
  }

  logout() {
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }
}
