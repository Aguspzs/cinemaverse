import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItemSliding, IonItemOptions, IonItemOption, IonItem, IonModal, IonHeader, IonToolbar, IonButton, IonTitle, IonButtons, IonContent, IonInput, IonTextarea } from '@ionic/angular/standalone';
import { Movie } from '../../interfaces/movie.interface';
import { StarsButtonComponent } from '../stars-button/stars-button.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ModalEditComponent } from '../modal-edit/modal-edit.component';
import { FirestoreService } from '../../services/firestore.service';
import { ToastController } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { ModalDetailComponent } from '../modal-detail/modal-detail.component';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [IonTextarea, IonInput, IonContent, IonButtons, IonTitle, IonButton, IonToolbar, IonHeader, IonModal, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, StarsButtonComponent, ReactiveFormsModule, ModalEditComponent, CommonModule, ModalDetailComponent],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() movie: Movie;
  @ViewChild(ModalEditComponent) modalEdit: ModalEditComponent;
  @ViewChild(ModalDetailComponent) modalDetail: ModalDetailComponent;

  public movieForm = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required]],
    img: [''],
  });

  constructor(private formBuilder: FormBuilder, private firestore: FirestoreService, private toastController: ToastController) {}

  ngOnInit(): void {
    this.movieForm.patchValue(this.movie);
  }

  ratingChange(e: any) {
    this.movie.rating = e;
    this.firestore
      .updateMovie(this.movie)
      .then(async () => {
        const toast = await this.toastController.create({
          message: 'Rating updated!',
          duration: 1500,
          position: 'top',
        });
        await toast.present();
      })
      .catch(async (error) => {
        console.error('Error updating rating: ', error);
      });
  }
  openEdit() {
    this.modalEdit.openEdit(true);
  }
  openDetail() {
    this.modalDetail.openEdit(true);
  }
}
