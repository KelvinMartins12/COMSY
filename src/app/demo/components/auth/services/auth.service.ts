import { Injectable } from '@angular/core';
import {AngularFireAuth} from "@angular/fire/compat/auth";
import { Router} from "@angular/router";
@Injectable({
    providedIn: 'root',
})
export class AuthService {
    user: firebase.default.User;

    constructor(private auth: AngularFireAuth, private router: Router) {
        this.auth.onAuthStateChanged((user) => {
            this.user = user;
        });
    }

    login(email: string, password: string ) {
        this.auth.signInWithEmailAndPassword(email, password).then(
            () => {
                if (this.estaLogado())
                  return  this.router.navigate([''])
                return this.router.navigate(['/auth/login'])
            }
        )

    }

    signOut(): Promise<void> {
        return this.auth.signOut();
    }

    estaLogado(): boolean {
        return !!this.user;
    }
}
