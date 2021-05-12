import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  loginForm: FormGroup;
  spinner: boolean;

  constructor(
    private loginService: LoginService,
    private router: Router,
    fb: FormBuilder
  ) {
    this.loginForm = fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.spinner = false;
  }

  submit(): void {
    if (this.loginForm.valid) {
      this.spinner = true;
      const user = this.loginForm.get('username')?.value;
      const pass = this.loginForm.get('password')?.value;
      this.loginService.login(user, pass).subscribe((res: any) => {
        const jwt = res && res.data ? res.data.jwt : null;
        this.loginService.setLogged(jwt);
        this.spinner = false;
        this.router.navigate(['check-imports-table']);
      });
    }
  }
}
