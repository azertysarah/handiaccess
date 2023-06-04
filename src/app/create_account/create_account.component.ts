import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

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
        this.authService.signup(formData).subscribe(
          (response) => {
            // Gérez la réponse du backend ici
            console.log(response);
          },
          (error) => {
            // Gérez les erreurs ici
            console.error(error);
          }
        );
    }      
    constructor(private router: Router, private authService: AuthService) {}
    
    redirigerVersLogin() {
        this.router.navigate(['/user']);
    }
      
};

  
