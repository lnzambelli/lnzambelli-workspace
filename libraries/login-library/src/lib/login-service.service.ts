import { Injectable } from '@angular/core';
import { FirebaseLoginService } from './firebase-login.service';

@Injectable({
  providedIn: 'root',
})
export class LoginServiceService {

  constructor(private firebaseLoginService: FirebaseLoginService) { }

  public logIn(mail: string, password: string) {
    return this.firebaseLoginService.logIn(mail, password);
  }

  public logOut() {
    return this.firebaseLoginService.logOut();
  }

  public isLoggedIn(): Promise<boolean> | boolean {
    return this.firebaseLoginService.isLoggedIn();
  }
}
