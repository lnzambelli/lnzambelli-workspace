import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { first, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FirebaseLoginService {

  private loggedIn!: boolean;

  constructor(private authFire: AngularFireAuth) {
    this.authFire.authState.subscribe((authState) => this.loggedIn = !!authState);
  }

   public async logIn(mail: string, password: string) {
    try {
      const authState = await this.authFire.signInWithEmailAndPassword(mail, password);
      this.loggedIn = !!authState;
    } catch (error) {
      throw new Error(error);
    }
  }

  public logOut() {
    return this.authFire.signOut();
  }

  public isLoggedIn(): Promise<boolean> | boolean {
    if (this.loggedIn === undefined) {
      return this.getFirstTimeLoggedInInfo();
    }

    return this.loggedIn;
  }

  private getFirstTimeLoggedInInfo(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.authFire.authState.pipe(
        first(),
        map((authState) => resolve(!!authState))
      ).subscribe();
    });
  }
}
