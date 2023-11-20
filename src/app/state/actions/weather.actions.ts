import { createAction, props } from '@ngrx/store'
import { LocationModel, WeatherModel } from 'src/app/core/models/weather.model'

export const loadWeather = createAction(
  '[Weather List] load weather',
  props<{ location: LocationModel }>()
)

export const loadedWeather = createAction(
  '[Weather List] loaded weather',
  props<{ weather: WeatherModel }>()
)
