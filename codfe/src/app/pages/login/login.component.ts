import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

 
  loginForm: FormGroup =  new FormGroup({
    userName: new FormControl(""),
    password: new FormControl("")
  });

  router = inject(Router);

  onLogin() {
    debugger;
    const loginObj =  this.loginForm.value;
    if(loginObj.userName == "Admin" && loginObj.password =="112233") {
      this.router.navigateByUrl("/dashboard")
    } else {
      alert("Login Details Are Wrong")
    }
  }

}

export class LoginUser {
  userName: string;
  password: string;

  constructor() {
    this.userName = '';
    this.password = '';
  }
}
