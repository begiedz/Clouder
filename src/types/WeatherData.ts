export interface WeatherData {
  location: {
    name: string;
    country: string;
  };
  current: {
    temp_c: number;
    condition: {
      text: string;
      icon: string;
    };
  };
  forecast: {
    forecastday: {
      date: string;
      day: {
        maxtemp_c: number;
        mintemp_c: number;
        avgtemp_c: number;
        condition: {
          text: string;
          icon: string;
        };
        daily_chance_of_rain: number;
        daily_chance_of_snow: number;
        daily_will_it_rain: number;
        daily_will_it_snow: number;
      };
      hour: {
        time: string;
        temp_c: number;
        condition: {
          icon: string;
        };
        time_epoch: number;
        chance_of_rain: number;
        chance_of_snow: number;
        will_it_rain: number;
        will_it_snow: number;
      }[];
    }[];
  };
  alerts: {
    alert: {}[];
  };
}
