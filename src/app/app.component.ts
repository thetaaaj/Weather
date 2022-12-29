import { Component, OnInit } from '@angular/core';
import { WeatherData } from './models/weather.model';
import { WeatherService } from './services/weather.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cityName: string = 'Landon';

  weatherData?: WeatherData;

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }


  getWeatherData(city: string): void {
    this.weatherService.getWeatherData(city)
      .subscribe({
        next: (response) => {
          this.weatherData = response;
        }
      });
  }

  onSubmit() {
    this.getWeatherData(this.cityName);
    this.cityName = '';
  }
}
