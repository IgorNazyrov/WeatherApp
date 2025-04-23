export interface WeatherItem {
  data: {
    city: {
      name: string;
    };
    list: Array<{
      dt: number;
      dt_txt: string;
      main: {
        temp: number;
        feels_like: number;
        humidity: number;
        pressure: number;
      };
      weather: Array<{
        main: string;
        description: string;
      }>;
      wind: {
        speed: number;
      };
      visibility: number;
    }>;
  } | null;
}

export interface WeatherData {
  city: {
    name: string
  },
  list: WeatherForecast[]
}

export interface WeatherForecast {
  dt: number;
  dt_txt: string,
  main: {
    feels_like: number,
    humidity: number,
    pressure: number,
    temp: number,
    temp_max?: number,
    temp_min?: number,
  }
  visibility: number,
  weather: Array<{
    main: string,
    description: string,
  }>
  wind: {
    speed: number,
  }
}

export interface WeatherNowData {
  time: string;
  temperature: number;
  temperatureFeels: number;
  weatherDescription: string;
  weather: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
  visibility: number;
  city: string;
}

export interface GeoData {
  lat: number,
  lon: number,
  name: string,
}

export interface HourlyForecastItem {
  time: string;
  temperature: number;
  weather: string;
}

export interface FiveDayForecastItem {
  date: string,
  weather: string,
  maxTemp: number,
  minTemp: number,
}

export interface NavigationItem {
  main: {
    feels_like: number,
    temp: number,
  }
  weather: Array<{
    description: string,
  }>
  wind: {
    speed: number,
  }
}

export interface NavigationWeather {
  temperature: number;
  temperatureFeels: number;
  weather: string;
  windSpeed: number;
  city: string;
}