import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonHeader, IonButtons, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuButton, IonInput, IonInputPasswordToggle, IonButton, IonCol } from '@ionic/angular/standalone';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { AuthService } from '../services/auth.service';
import { ToastController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonCol, IonButton, IonInput, IonHeader, IonButtons, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuButton, IonInputPasswordToggle, ReactiveFormsModule, LogoComponent],
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private toastController: ToastController, private router: Router) {}
  onSubmit() {
    this.login();
  }

  async login() {
    const { email, password } = this.loginForm.value;
    try {
      if (email && password) {
        await this.authService.login(email, password);
        this.router.navigate(['movies']);
      } else {
        this.presentToast('Por favor, complete todos los campos');
      }
    } catch (error) {
      console.error('Error durante el inicio de sesión:', error);
      this.presentToast('Error al iniciar sesión');
    }
  }

  goToRegister() {
    this.router.navigate(['register']);
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }
}
