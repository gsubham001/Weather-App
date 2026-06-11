import { Component } from '@angular/core';
import { WeatherComponent } from './weather.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WeatherComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {}