import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {environment} from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  private apiKey: string = environment.apiKey;
  private apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) {
  }

  getCurrentWeather(loc: string) {
    return this.http.get(`${this.apiUrl}/weather`, {
      params: new HttpParams()
        .set('q', loc)
        .set('appid', this.apiKey)
    });
  }

  getForecast(loc: string) {
    return this.http.get(`${this.apiUrl}/forecast?q=${loc}&appid=${this.apiKey}`);
  }

}
