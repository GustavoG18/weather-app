import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment.dev'

export interface HeadResponse {
  headers: HttpHeaders
  status: number
  statusText: string
  ok: boolean
  url: string
}

@Injectable({
  providedIn: 'root'
})
export class WeatherApiServiceService {
  constructor (private readonly http: HttpClient) { }

  statusRequest (name: string): Observable<HttpResponse<HeadResponse>> {
    return this.http.head<HeadResponse>(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${environment.API_WEATHER_KEY}`, { observe: 'response' })
  }

  weatherRequest (name: string): Observable<any> {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${name}&appid=${environment.API_WEATHER_KEY}&units=metric`, { observe: 'response' })
  }
}
