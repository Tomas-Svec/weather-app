import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonItem, IonButton, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCard, IonCardContent, IonList, IonLabel } from '@ionic/angular/standalone';
import { ApiService } from 'src/app/services/api.service';
import { ForecastResponse } from 'src/app/models/weather.models';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [
    IonLabel, IonList, IonCardContent, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonButton, 
    IonItem, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    
  ]
})
export class HomePage {
  city: string = '';
  currentWeather: any;
  forecast: any[] = [];

  constructor(private apiService: ApiService) { }

  async getWeather() {
    if (!this.city) return;
  
    try {
      // Obtener datos climáticos actuales
      this.currentWeather = await this.apiService.getWeather(this.city);
  
      // Obtener pronóstico del clima
      const forecastData = await this.apiService.getForecast(this.city);
  
      // Validar que forecastData tenga la estructura esperada
      if (forecastData.forecast && forecastData.forecast.forecastday) {
        this.forecast = forecastData.forecast.forecastday.map((day) => ({
          date: day.date,
          maxtemp_c: day.day.maxtemp_c,
          mintemp_c: day.day.mintemp_c,
          daily_chance_of_rain: day.day.daily_chance_of_rain,
        }));
      } else {
        console.error('La respuesta del pronóstico no tiene la estructura esperada:', forecastData);
        this.forecast = [];
      }
    } catch (error) {
      console.error('Error al obtener el clima:', error);
      alert('Ocurrió un error al obtener el clima. Por favor, intenta nuevamente.');
    }
  }

}
