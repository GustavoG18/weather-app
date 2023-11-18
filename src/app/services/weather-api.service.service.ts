import { Injectable } from '@angular/core'
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment.dev'
import { Endpoints } from '../core/endpoints'
import { HeadResponse } from '../core/types'
import { WeatherModel } from '../core/models/weather.model'

@Injectable({
  providedIn: 'root'
})
export class WeatherApiServiceService {
  constructor (private readonly http: HttpClient) { }

  statusRequest (name: string): Observable<HttpResponse<HeadResponse>> {
    const params = this.requiredParams(name)
    return this.http.head<HeadResponse>(Endpoints.WEATHER_API, { params, observe: 'response' })
  }

  weatherRequest (coord: {
    lat: number
    lon: number
  }): Observable<WeatherModel> {
    const URL = `${Endpoints.WEATHER_API}?lat=${coord.lat}&lon=${coord.lon}&appid=${environment.API_WEATHER_KEY}`
    return this.http.get<WeatherModel>(URL)
  }

  requiredParams (name: string): HttpParams {
    let params = new HttpParams()
    params = params.append('q', name)
    params = params.append('appid', environment.API_WEATHER_KEY)
    params = params.append('units', 'metric')
    return params
  }
}
