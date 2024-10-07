import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Logo, LogoResponse } from '../interfaces/logo.interface';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogoService {
  private logosSubject = new BehaviorSubject<Logo[]>([]);
  logos$ = this.logosSubject.asObservable();

  private currentLogoSubject = new BehaviorSubject<Logo | null>(null);
  currentLogo$ = this.currentLogoSubject.asObservable();

  constructor(private http: HttpClient) {}

  fetchLogos(): Observable<Logo[]> {
    if (this.logosSubject.value.length > 0) {
      return this.logos$;
    }

    return this.http.get<LogoResponse>('https://randomuser.me/api/0.4/?lego&randomapi&results=5').pipe(
      map((response: LogoResponse) => response.results),
      tap((logos: Logo[]) => {
        this.logosSubject.next(logos);
        this.currentLogoSubject.next(logos[0]);
      })
    );
  }
  getLogos(): Logo[] {
    return this.logosSubject.value;
  }

  setCurrentLogo(logo: Logo): void {
    this.currentLogoSubject.next(logo);
  }

  getCurrentLogo(): Logo | null {
    return this.currentLogoSubject.value;
  }
}
