import { HttpHeaders } from '@angular/common/http'

export interface AddressComponent {
  short_name: string
  types: string[]
}

export interface AutocompleteValue {
  place: string
  lat: number
  lon: number
}

export interface HeadResponse {
  headers: HttpHeaders
  status: number
  statusText: string
  ok: boolean
  url: string
}

export interface WeatherResponse {
  body: BodyResponse
  headers: HttpHeaders
  status: number
  statusText: string
  ok: boolean
  url: string
}

export interface BodyResponse {
  message: number
  list: List[]
  cod: string
  cnt: number
  city: City
}

export interface City {
  coord: Coord
  country: string
  id: number
  name: string
  population: number
  sunrise: number
  sunset: number
  timezone: number
}

export interface Coord {
  lat: number
  lng: number
}

export interface List {
  visibility: number
  pop: number
  dt_txt: string
  dt: number
  clouds: Cloud
  main: Main
  sys: Sys
  weather: Weather[]
  wind: Wind
}

export interface Cloud {
  all: number
}

export interface Main {
  feels_like: number
  grnd_level: number
  humidity: number
  pressure: number
  sea_level: number
  temp: number
  temp_kf: number
  temp_max: number
  temp_min: number
}

export interface Sys {
  pod: string
}

export interface Weather {
  description: string
  icon: string
  id: number
  main: string
}

export interface Wind {
  deg: number
  gust: number
  speed: number
}
