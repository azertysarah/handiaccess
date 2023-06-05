import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-create_account',
  templateUrl: './create_account.component.html',
  styleUrls: ['./create_account.component.css']
})
export class CreateaccountComponent {
    sign_upForm = new FormGroup({
        gender : new FormControl('', [Validators.required]),
        name : new FormControl('', [Validators.required]),
        dateOfBirth : new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required, Validators.email]),
        confirm_email : new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
        confirm_password: new FormControl('', Validators.required)

    });
    
    sign_up() {
      if (this.sign_upForm.invalid) return;
      
      const formData = this.sign_upForm.value;
      this.authService.signup(formData).subscribe({
        next: (res: any) => {
          console.log(res.message);
          const token = res.token;
          const user = res.user;
          localStorage.setItem('token', token);
          localStorage.setItem('user', user);
          this.goToHomePage();
        },
        error: () => {
          console.error("Sign up failed");
          alert("Sign up failed");
        }
      });
    }      
    constructor(
      private router: Router, 
      private authService: AuthenticationService
    ) {}
    
    goToLogin() {
      this.router.navigate(['/user']);
    }
    goToHomePage(){
      this.router.navigate(['/home']);
    }
      
};

  
