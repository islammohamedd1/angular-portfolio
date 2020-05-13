import { Component, OnInit } from '@angular/core';
import { ThemeService } from './services/theme.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  theme: string;

  constructor(private themeService: ThemeService) { }

  ngOnInit() {
    this.getTheme();
  }

  getTheme(): void {
    this.themeService.getTheme().subscribe(theme => this.theme = theme);
  }
}
