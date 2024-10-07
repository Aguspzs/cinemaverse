import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonHeader, IonButtons, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuButton, IonInput, IonInputPasswordToggle, IonButton } from '@ionic/angular/standalone';
import { LogoComponent } from '../../shared/components/logo/logo.component';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [IonButton, IonInput, IonHeader, IonButtons, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonMenuButton, IonInputPasswordToggle, ReactiveFormsModule, LogoComponent],
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage {
  registerForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router, private toastController: ToastController) {}
  onSubmit() {
    this.register();
  }

  async register() {
    const { email, password } = this.registerForm.value;
    try {
      if (email && password) {
        await this.authService.register(email, password);
        this.router.navigate(['movies']);
      } else {
        this.presentToast('Email y contraseña son requeridos');
      }
    } catch (error) {
      console.error('Error durante el registro:', error);
      this.presentToast('Error al registrar');
    }
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1500,
      position: 'top',
    });

    await toast.present();
  }

  goToLogin() {
    this.router.navigate(['login']);
  }
}
