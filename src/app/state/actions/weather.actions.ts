import { createAction, props } from '@ngrx/store'
import { WeatherModel } from 'src/app/core/models/weather.model'

export const loadWeather = createAction(
  '[Weather List] load weather'
)

export const loadedWeather = createAction(
  '[Weather List] loaded weather',
  props<{ weather: WeatherModel }>()
)
