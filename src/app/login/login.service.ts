import { Injectable } from '@angular/core';
import {
  getAuth,
  signInWithEmailAndPassword,
  UserCredential,
  getIdToken,
  signOut,
} from 'firebase/auth';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {
  token: string;

  constructor(private router: Router) {}

  login(email: string, password: string) {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: UserCredential) => {
        const user = userCredential.user;
        getIdToken(user).then((token) => {
            this.token = token;
            this.router.navigate(['/']);
        });
      })
  }

  getIdToken() {
    return this.token;
  }

  isAutenticado(){
    return this.token != null;
  }

  logout(){
    const auth = getAuth();
    signOut(auth).then(()=>{
      this.token = ''; 
      this.router.navigate(['login']);
    }).catch(error => console.log('error logout' + error))
  }
}
