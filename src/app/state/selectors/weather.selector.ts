import { createSelector } from '@ngrx/store'
import { AppState } from '../app.state'
import { WeatherState } from 'src/app/core/models/weather.state'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const selectWeatherFeature = (state: AppState) => state.weather

export const selectListWeather = createSelector(selectWeatherFeature, (state: WeatherState) => state.weather)

export const selectLoading = createSelector(selectWeatherFeature, (state: WeatherState) => state.loading)
