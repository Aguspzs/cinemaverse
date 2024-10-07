import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItemSliding, IonItemOptions, IonItemOption, IonItem, IonModal, IonHeader, IonToolbar, IonButton, IonTitle, IonButtons, IonContent, IonInput, IonTextarea, IonLoading, IonToast, IonList, IonImg } from '@ionic/angular/standalone';
import { Movie } from '../../interfaces/movie.interface';
import { StarsButtonComponent } from '../stars-button/stars-button.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-detail',
  standalone: true,
  imports: [IonImg, IonList, IonToast, IonLoading, IonTextarea, IonInput, IonContent, IonButtons, IonTitle, IonButton, IonToolbar, IonHeader, IonModal, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, StarsButtonComponent, ReactiveFormsModule],
  templateUrl: './modal-detail.component.html',
  styleUrls: ['./modal-detail.component.scss'],
})
export class ModalDetailComponent {
  @Input() movie: Movie;
  isOpen: boolean = false;

  public loading: boolean = false;

  constructor() {}

  openEdit(value: boolean) {
    this.isOpen = value;
  }
}
