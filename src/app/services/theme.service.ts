import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  currentTheme: BehaviorSubject<string>;

  constructor() {
    this.currentTheme = new BehaviorSubject<string>('dark');
  }

  toggleTheme(): void {
    if (this.currentTheme.value === 'light') {
      this.currentTheme.next('dark');
    } else {
      this.currentTheme.next('light');
    }
  }

  getTheme(): Observable<string> {
    return this.currentTheme.asObservable();
  }
}
