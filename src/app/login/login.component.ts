import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from './login.service';
import { LoggingService } from '../LoggingService.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{
  email= "admin@gmail.com"
  password = "@admin12345";
  constructor(private loginService:LoginService, private loggingService: LoggingService){}
  ngOnInit(): void {
  }

  login(form:NgForm){
    const _email = form.value.email;
    const _password = form.value.password;
    this.loginService.login(_email, _password);
    this.loggingService.Login();
  }
}
