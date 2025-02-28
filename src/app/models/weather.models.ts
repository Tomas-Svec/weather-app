export interface WeatherResponse {
    location: {
      name: string;
      country: string;
    };
    current: {
      temp_c: number;
      humidity: number;
      precip_mm: number;
    };
  }
  
  export interface ForecastResponse {
    forecast: {
      forecastday: Array<{
        date: string;
        day: {
          maxtemp_c: number;
          mintemp_c: number;
          daily_chance_of_rain: number;
        };
      }>;
    };
  }