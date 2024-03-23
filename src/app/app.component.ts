import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as firebase from '@firebase/app';
import { LoginService } from './login/login.service';
import { CommonModule } from '@angular/common';
import { LoggingService } from './LoggingService.service';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, CommonModule]
})
export class AppComponent implements OnInit {

  constructor(private loginService:LoginService, public loggingService:LoggingService){}

  ngOnInit():void {
    firebase.initializeApp({
      apiKey: "AIzaSyAYXbnxPI1o5LKOiYFaU6-PF_3kjH-ylX8",
      authDomain: "listado-personas-63665.firebaseapp.com",
    });
  }

  isAutenticado(){
    return this.loginService.isAutenticado();
  }

  salir(){
    this.loginService.logout();
    this.loggingService.LogOut();
  }
}