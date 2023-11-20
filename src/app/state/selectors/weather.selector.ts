import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { WeatherState } from 'src/app/core/models/weather.state'

export const selectWeatherFeature = (state: AppState): WeatherState => state.weather

export const selectListWeather = createSelector(selectWeatherFeature, (state: WeatherState) => state.weather)

export const selectLoading = createSelector(selectWeatherFeature, (state: WeatherState) => state.loading)
