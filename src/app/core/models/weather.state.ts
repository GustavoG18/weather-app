import { WeatherModel } from './weather.model'

export interface WeatherState {
  loading: boolean
  weather: WeatherModel
}
