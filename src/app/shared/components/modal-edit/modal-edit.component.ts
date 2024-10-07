import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItemSliding, IonItemOptions, IonItemOption, IonItem, IonModal, IonHeader, IonToolbar, IonButton, IonTitle, IonButtons, IonContent, IonInput, IonTextarea, IonLoading, IonToast } from '@ionic/angular/standalone';
import { Movie } from '../../interfaces/movie.interface';
import { StarsButtonComponent } from '../stars-button/stars-button.component';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { FirestoreService } from '../../services/firestore.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-modal-edit',
  standalone: true,
  imports: [IonToast, IonLoading, IonTextarea, IonInput, IonContent, IonButtons, IonTitle, IonButton, IonToolbar, IonHeader, IonModal, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonCardContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, StarsButtonComponent, ReactiveFormsModule],
  templateUrl: './modal-edit.component.html',
  styleUrls: ['./modal-edit.component.scss'],
})
export class ModalEditComponent implements OnInit {
  @Input() movie: Movie;
  @Output() valueEmitted = new EventEmitter<boolean>();
  isOpen: boolean = false;

  public loading: boolean = false;

  public movieForm = this.formBuilder.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    description: ['', [Validators.required]],
    img: [''],
    rating: [0],
    id: [''],
  });

  constructor(private formBuilder: FormBuilder, private firestoreService: FirestoreService, private loadingController: LoadingController) {}

  ngOnInit(): void {
    this.movieForm.patchValue(this.movie);
  }
  openEdit(value: boolean) {
    this.isOpen = value;
  }
  async confirmEdit() {
    const loading = await this.loadingController.create({
      message: 'Saving changes...',
    });
    await loading.present();
    this.openEdit(false);
    try {
      await this.firestoreService.updateMovie(this.movieForm.value);
      await loading.dismiss();
    } catch (error) {
      console.error('Error updating movie: ', error);
      await loading.dismiss();
    }
  }
}
