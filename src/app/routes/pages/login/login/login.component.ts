import { LoginService } from './../../Service/login.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  });

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    this.loginService.login(this.loginForm.value).subscribe(res => {
      console.log(JSON.stringify(res));
      localStorage.setItem('token', res['token']);
      localStorage.setItem('id', res['user']['id']);
      localStorage.setItem('email', res['user']['email']);
      this.router.navigateByUrl('/home');
    }, (error) => {
      console.log(JSON.stringify(error.error));
    })
  }

}
