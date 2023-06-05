import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  loginForm: FormGroup;

  constructor(
    private router: Router, 
    private http: HttpClient,
    private authService: AuthenticationService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  login(){
    if (this.loginForm.invalid) return;

    const email = this.loginForm.get('email')!.value;
    const password = this.loginForm.get('password')!.value;

    const loginData = { email, password };

    this.authService.login(loginData).subscribe({
      next: (res: any) => {
        const token = res.token;
        const user = res.user;
        localStorage.setItem('token', token);
        localStorage.setItem('user', user);
        this.goToHomePage();
      },
      error: () => {
        console.error("Login failed");
        alert("Login failed");
      }
    })
  }

  goToCreateAccount() {
    this.router.navigate(['/create_account']);
  }
  goToHomePage(){
    this.router.navigate(['/home']);
  }

}
