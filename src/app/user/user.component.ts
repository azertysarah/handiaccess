import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  login(){
    // CALL-API with username and password
    if (this.loginForm.invalid) return;

    alert('Calling backend to login');
  }
  constructor(private router: Router) {}

  redirigerVersCreateAccount() {
    this.router.navigate(['/create_account']);
  }
}
