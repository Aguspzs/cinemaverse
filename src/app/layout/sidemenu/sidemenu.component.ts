import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { IonLabel, IonContent, IonList, IonListHeader, IonNote, IonItem, IonIcon, IonMenu, IonMenuToggle, IonHeader, IonToolbar, IonTitle, IonAvatar, IonChip } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logOutOutline } from 'ionicons/icons';
import { User } from 'src/app/auth/interfaces/user.interface';
import { AuthService } from 'src/app/auth/services/auth.service';
import { Logo } from 'src/app/shared/interfaces/logo.interface';
import { LogoService } from 'src/app/shared/services/logo.service';

@Component({
  standalone: true,
  imports: [IonChip, IonAvatar, IonTitle, IonToolbar, IonHeader, IonIcon, IonItem, IonNote, IonListHeader, IonList, IonContent, IonLabel, IonMenu, IonMenuToggle, RouterModule],
  selector: 'app-sidemenu',
  styleUrls: ['./sidemenu.component.scss'],
  templateUrl: './sidemenu.component.html',
})
export class SideMenuComponent implements OnInit {
  user: User;
  currentLogo: Logo | null = null;

  constructor(private authService: AuthService, private logoService: LogoService) {
    addIcons({ logOutOutline });
  }

  ngOnInit() {
    this.user = this.authService.getUser();
    this.getLogos();
  }

  getLogos() {
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

  logout() {
    this.authService.logout();
  }
}
