import { Register } from './../Auth/register/register';
import { HttpClient } from '@angular/common/http';
import { Login } from './../Auth/login/login';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http : HttpClient) {}

  private apiUrl = 'http://localhost:8080/api/auth';

  login(data : any)
  {
    return this.http.post(`${this.apiUrl}/login`, data, { responseType: 'text' }).pipe(tap((res) => {
      localStorage.setItem('token', res);
    }));
  }

  Register(data : any)
  {
    return this.http.post(`${this.apiUrl}/register`, data, { responseType: 'text' });
  }

  getToken()
  {
    return localStorage.getItem('token');
  }

  isloggedIn()
  {
    return this.getToken() !== null;
  }

  logout()
  {
    localStorage.removeItem('token');
  }

  getUserRole()
  {
    const token = this.getToken();
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1]));
      return payload.role;
    }
    return null;
  }

  isadmin()
  {
    return this.getUserRole() === 'admin';
  }

  isuser()
  {
    return this.getUserRole() === 'user';
  }
}

