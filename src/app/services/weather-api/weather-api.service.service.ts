import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment.dev'
import { Endpoints } from '../../core/endpoints'
import { WeatherResponseApi } from '../../core/models/weather.model'

@Injectable({
  providedIn: 'root'
})
export class WeatherApiServiceService {
  constructor (private readonly http: HttpClient) { }

  weatherRequest (coord: {
    lat: number
    lon: number
  }): Observable<WeatherResponseApi> {
    const URL = `${Endpoints.WEATHER_API}?lat=${coord.lat}&lon=${coord.lon}&appid=${environment.API_WEATHER_KEY}&units=metric&lang=es`
    return this.http.get<WeatherResponseApi>(URL)
  }
}
