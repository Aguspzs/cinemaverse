import { Component, EventEmitter, Input, Output } from '@angular/core';
import { addIcons } from 'ionicons';
import { star, starOutline } from 'ionicons/icons';
import { IonButton, IonIcon } from '@ionic/angular/standalone';

@Component({
  selector: 'app-stars-button',
  standalone: true,
  imports: [IonIcon, IonButton],
  templateUrl: './stars-button.component.html',
  styleUrls: ['./stars-button.component.scss'],
})
export class StarsButtonComponent {
  @Input() rating = 0;
  @Output() ratingChange = new EventEmitter<number>();

  stars = [0, 1, 2, 3, 4];
  constructor() {
    addIcons({ starOutline, star });
  }

  rate(id: number) {
    this.rating = id;
    this.ratingChange.emit(this.rating);
  }
}
