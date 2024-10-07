import { inject, Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, updateDoc } from '@angular/fire/firestore';
import { Movie } from '../interfaces/movie.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  private firestore: Firestore = inject(Firestore);
  private enlace: string = 'Movies';
  movies$: Observable<Movie[]>;
  constructor() {}

  getMovies(): Observable<Movie[]> {
    const moviesCollection = collection(this.firestore, 'Movies');
    return (this.movies$ = collectionData(moviesCollection, { idField: 'id' }) as Observable<Movie[]>);
  }

  async updateMovie(data: any): Promise<void> {
    const document = doc(this.firestore, `${this.enlace}/${data.id}`);
    return updateDoc(document, data);
  }
}
