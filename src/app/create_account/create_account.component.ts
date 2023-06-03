import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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
    
    sign_up(){
        // CALL-API with username and password
        if (this.sign_upForm.invalid) return;
    
        alert('Calling backend to sign up');
    }
    constructor(private router: Router) {}
    
    redirigerVersLogin() {
        this.router.navigate(['/user']);
    }
};

  
