import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/services/theme.service';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private themeService: ThemeService, 
              private iconRegistry: MatIconRegistry, 
              private sanitizer: DomSanitizer) { 
    iconRegistry.addSvgIcon(
      'brightness',
      sanitizer.bypassSecurityTrustResourceUrl('assets/brightness_medium.svg')
    );
  }

  ngOnInit(): void {
  }

  onSwitchClick(): void {
    this.themeService.toggleTheme();
  }

}
