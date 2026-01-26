import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  companyName = 'Schermann & Zapfel Trans';
  currentYear = new Date().getFullYear();
}