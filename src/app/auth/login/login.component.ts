import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { LoginService } from '../../core/services/auth/login.service';
import { LoginRequest } from '../../core/models/loginRequest.modelo';
import { BehaviorSubject } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm = this.formBuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  })

  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  get username(){
    return this.loginForm.controls.username;
  }

  get password(){
    return this.loginForm.controls.password;
  }

  login2(){
    if(this.loginForm.valid){
      this.loginService.login(this.loginForm.value as LoginRequest);
      this.router.navigateByUrl('/dashboard');
      this.loginForm.reset();
    }
    else{
      this,this.loginForm.markAllAsTouched();
      alert("Error al ingresar los datos");
    }
  }

  login() {
    if (this.loginForm.valid) {
      this.loginService.login(this.loginForm.value).subscribe(
        (res: any) => {
          this.loginService.setToken(res.accessToken);
          this.router.navigate(['/dashboard']);
        },
        (err) => {
          alert('Login fallido');
          console.error('Login fallido');
        }
      );
    }
  }

}
