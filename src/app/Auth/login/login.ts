import { Register } from './../register/register';
import { Component } from '@angular/core';
import { AuthService } from '../../Core/auth-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule , CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  formData = {
    username: '',
    password: '',
  };

  constructor(public authService: AuthService , public router : Router) {}

  Login(data : any)
  {
    this.authService.login(data).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/menu']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }

}
