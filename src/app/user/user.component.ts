import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  loginForm: FormGroup; // Déclarer la propriété loginForm

  constructor(private router: Router, private http: HttpClient) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }

  login(){
    if (this.loginForm.invalid) return;

    const email = this.loginForm.get('email')!.value; // Utiliser l'opérateur '!' pour indiquer que la valeur ne sera pas null
    const password = this.loginForm.get('password')!.value;

    const loginData = { email, password };

    this.http.post<any>('http://localhost:3000/authentication/login', loginData)
      .subscribe(
        (response) => {
          const token = response.token;
          // Stockez le token dans le stockage local (localStorage) pour une utilisation ultérieure

          // Redirigez vers une autre page ou effectuez d'autres actions
          this.goToHomePage();
        },
        (error) => {
          console.error('Login failed', error);
          alert('Login failed');
        }
      );
  }

  goToCreateAccount() {
    this.router.navigate(['/create_account']);
  }
  goToHomePage(){
    this.router.navigate(['/home']);
  }

}
