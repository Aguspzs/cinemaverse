import { Component, OnInit } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonItem, IonLabel, IonIcon, IonList } from '@ionic/angular/standalone';
import { CardComponent } from '../shared/components/card/card.component';
import { Movie } from '../shared/interfaces/movie.interface';
import { FirestoreService } from '../shared/services/firestore.service';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.page.html',
  styleUrls: ['./folder.page.scss'],
  standalone: true,
  imports: [IonList, IonIcon, IonLabel, IonItem, IonCardContent, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCard, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonContent, CardComponent],
})
export class FolderPage implements OnInit {
  public movies: Movie[] = [];
  constructor(private firestore: FirestoreService) {}
  ngOnInit(): void {
    this.firestore.getMovies().subscribe({
      next: (value) => {
        this.movies = value;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
