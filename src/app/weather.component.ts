import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface WeatherData {
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  icon: string;
}

interface WeatherProfile {
  temperature: number;
  condition: string;
  humidity: number;
  emoji: string;
}

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  cityName = '';
  weatherData: WeatherData | null = null;

  private readonly mockWeatherByCity: Record<string, WeatherProfile> = {
    london: { temperature: 14, condition: 'Light Rain', humidity: 82, emoji: '🌧️' },
    mumbai: { temperature: 32, condition: 'Sunny', humidity: 68, emoji: '☀️' },
    tokyo: { temperature: 24, condition: 'Cloudy', humidity: 59, emoji: '☁️' },
    'new york': { temperature: 19, condition: 'Breezy', humidity: 54, emoji: '🌬️' },
    cairo: { temperature: 36, condition: 'Hot and Clear', humidity: 28, emoji: '🔥' }
  };

  searchWeather(): void {
    const city = this.cityName.trim();

    if (!city) {
      this.weatherData = null;
      return;
    }

    this.weatherData = this.buildWeatherData(city);
  }

  private buildWeatherData(city: string): WeatherData {
    const normalizedCity = city.toLowerCase();
    const profile = this.mockWeatherByCity[normalizedCity] ?? {
      temperature: 26,
      condition: 'Partly Cloudy',
      humidity: 56,
      emoji: '⛅'
    };

    return {
      city: this.formatCityName(city),
      temperature: profile.temperature,
      condition: profile.condition,
      humidity: profile.humidity,
      icon: this.createEmojiIcon(profile.emoji)
    };
  }

  private formatCityName(city: string): string {
    return city
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }

  private createEmojiIcon(emoji: string): string {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="160" height="160" viewBox="0 0 160 160"><rect width="160" height="160" rx="40" fill="#f7fbff"/><text x="80" y="92" text-anchor="middle" font-size="88">${emoji}</text></svg>`;

    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
  }
}