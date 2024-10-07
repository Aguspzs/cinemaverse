import { Component, OnInit } from '@angular/core';
import { IonAvatar, IonButton, IonIcon, IonItem, IonModal, IonContent, IonToolbar, IonTitle, IonButtons, IonList, IonImg, IonLabel } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { pencilOutline } from 'ionicons/icons';
import { Logo } from '../../interfaces/logo.interface';
import { LogoService } from '../../services/logo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [IonLabel, IonImg, IonList, IonButtons, IonTitle, IonToolbar, IonContent, IonModal, IonItem, IonIcon, IonButton, IonAvatar, CommonModule],
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss'],
})
export class LogoComponent implements OnInit {
  isOpen: boolean = false;
  loading: boolean = false;

  currentLogo: Logo | null = null;
  allLogos: Logo[] = [];

  constructor(private logoService: LogoService) {
    addIcons({ pencilOutline });
  }

  ngOnInit() {
    this.getLogos();
  }

  getLogos() {
    // GET ALL LOGOS
    this.logoService.fetchLogos().subscribe({
      next: (logos: Logo[]) => {
        this.allLogos = logos;
      },
      error: (err) => {
        console.log(err);
      },
    });
    // GET CURRENT LOGO
    this.logoService.currentLogo$.subscribe({
      next: (logo) => {
        this.currentLogo = logo;
      },
      error: (err) => {
        console.error(err);
      },
    });
  }

  changeLogo(logo: any): void {
    this.logoService.setCurrentLogo(logo);
    this.openModal(false);
  }

  openModal(value: boolean) {
    this.isOpen = value;
  }
}
