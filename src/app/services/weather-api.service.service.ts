import { Injectable } from '@angular/core'
import { HttpClient, HttpParams, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment.dev'
import { Endpoints } from '../core/endpoints'
import { HeadResponse, WeatherResponse } from '../core/types'

@Injectable({
  providedIn: 'root'
})
export class WeatherApiServiceService {
  constructor (private readonly http: HttpClient) { }

  statusRequest (name: string): Observable<HttpResponse<HeadResponse>> {
    const params = this.requiredParams(name)
    return this.http.head<HeadResponse>(Endpoints.WEATHER_API, { params, observe: 'response' })
  }

  weatherRequest (name: string): Observable<HttpResponse<WeatherResponse>> {
    const params = this.requiredParams(name)
    return this.http.get<WeatherResponse>(Endpoints.WEATHER_API, { params, observe: 'response' })
  }

  requiredParams (name: string): HttpParams {
    let params = new HttpParams()
    params = params.append('q', name)
    params = params.append('appid', environment.API_WEATHER_KEY)
    params = params.append('units', 'metric')
    return params
  }
}
