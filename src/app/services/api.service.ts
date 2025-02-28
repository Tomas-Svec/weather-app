import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { ForecastResponse, WeatherResponse } from '../models/weather.models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = environment.apiUrl; // URL de tu backend

  
  constructor(private http: HttpClient) { }

   /**
  * Obtiene los datos climáticos actuales para una ciudad específica.
  * @param city Nombre de la ciudad.
  * @returns Promesa con los datos climáticos actuales.
  */
 async getWeather(city: string): Promise<WeatherResponse> {
   try {
     const response = await this.http.get<WeatherResponse>(`${this.apiUrl}/weather/${city}`).toPromise();
     if (!response) {
       throw new Error('La respuesta del clima actual es undefined');
     }
     return response;
   } catch (error) {
     console.error('Error al obtener el clima:', error);
     throw error; // Relanza el error para manejarlo en el componente
   }
 }

 /**
  * Obtiene el pronóstico del clima para varios días para una ciudad específica.
  * @param city Nombre de la ciudad.
  * @returns Promesa con el pronóstico del clima.
  */
 async getForecast(city: string): Promise<ForecastResponse> {
   try {
     const response = await this.http.get<ForecastResponse>(`${this.apiUrl}/forecast/${city}`).toPromise();
     if (!response) {
       throw new Error('La respuesta del pronóstico es undefined');
     }
     return response;
   } catch (error) {
     console.error('Error al obtener el pronóstico:', error);
     throw error; // Relanza el error para manejarlo en el componente
   }
  }
 
}
