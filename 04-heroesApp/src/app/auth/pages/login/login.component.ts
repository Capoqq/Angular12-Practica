import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
  ]
})
export class LoginComponent implements OnInit {

  constructor(private router:Router, private loginService:AuthService) { }

  ngOnInit(): void {
  }

  login(){
  //Ir al backend
  this.loginService.login().subscribe(res =>{
    if(res.id){
      this.router.navigate(['./heroes'])
    }
  })
  //Un usuario
  }
  ingresarSinLogin(){
    this.loginService.loguot()
     this.router.navigate(['./heroes'])
  }


}
