import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../prueba-login/coreLogin/services/auth.service';


@Component({
  selector: 'app-prueba-login',
  templateUrl: './prueba-login.component.html',
  styleUrls: ['./prueba-login.component.scss']
})
export class PruebaLoginComponent implements OnInit {

  formLoginPrueba = new FormGroup({
    username : new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })
  
  constructor(
    private authService: AuthService, 
    private router: Router
  ) {}

  ngOnInit(): void {

  }   
  
  onLogin(){
    const formValue = this.formLoginPrueba.value
    this.authService.login(formValue)
    .subscribe( res => {
      console.log(res)
      this.router.navigate(['home/holabuenas'])
    })
  }

  //------------------------------------------
  //metodo que te desloguea, tendrias que meterlo en el header.ts donde 
  //donde este el boton de logOut
  onLoggout(): void{
    this.authService.logout()
  }
  //------------------------------------------
}
