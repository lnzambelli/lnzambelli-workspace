import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, NgModule, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginServiceService } from 'libraries/login-library/src/lib/login-service.service';

@Component({
  selector: 'ace-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginFormComponent implements OnInit {
  form!: FormGroup;

  constructor(private loginServices: LoginServiceService,
    private formBuilder: FormBuilder,
    private router: Router,
    private matSnackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      mail: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  logIn() {
    if (!this.form.valid) {
      return
    }
    const mail = this.form.value.mail;
    const password = this.form.value.password;
    this.loginServices.logIn(mail, password)
      .then(() => {
        this.newMessage("Bienvenido al sistema");
        this.router.navigate(['/home']);
      })
      .catch(error => {
        this.newMessage(this.messageError(error));
        console.error(error);
      })
  }

  get emailField() {
    return this.form.get('mail');
  }

  get passwordField() {
    return this.form.get('password');
  }

  private newMessage(message: string) {
    this.matSnackBar.open(message, 'Cerrar')
  }

  private messageError(err: any): string {
    switch (err.code) {
      case 'auth/user-not-found': {
        return "Email no registrado";
      }
      case 'auth/wrong-password': {
        return "Contraseña incorrecta";
      }
      default: {
        return "No se pudo ingresar, error: " + err.code + ": " + err.message;
      }
    }

  }

}

@NgModule({
  declarations: [LoginFormComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatInputModule,
    MatButtonModule,
    MatSnackBarModule
  ],
  exports: [LoginFormComponent],
})
export class LoginFormModule { }
