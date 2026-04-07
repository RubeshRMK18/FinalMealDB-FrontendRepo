import { Component } from '@angular/core';
import { AuthService } from '../../Core/auth-service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [FormsModule , CommonModule],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {

  formData = {
    username: '',
    password: '',
  };

  constructor(public authService: AuthService , public router : Router) {}  

  Register(data : any)
  {
    this.authService.Register(data).subscribe({
      next: (res) => {
        console.log(res);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }


}
