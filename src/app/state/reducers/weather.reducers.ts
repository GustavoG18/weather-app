import { createReducer, on } from '@ngrx/store'
import { WeatherModel } from 'src/app/core/models/weather.model'
import { WeatherState } from 'src/app/core/models/weather.state'
import { loadWeather, loadedWeather } from '../actions/weather.actions'

export const emptyWeatherModel: WeatherModel = {
  city: {
    coord: { lat: 0, lon: 0 },
    country: '',
    id: 0,
    name: '',
    population: 0,
    sunrise: 0,
    sunset: 0,
    timezone: 0
  },
  cnt: 0,
  cod: '',
  list: [],
  message: 0
}

export const initialState: WeatherState = {
  loading: false,
  weather: emptyWeatherModel
}

export const weatherReducer = createReducer(
  initialState,
  on(loadWeather, (state) => {
    return {
      ...state,
      loading: true
    }
  }),
  on(loadedWeather, (state, { weather }) => {
    return {
      ...state,
      loading: false,
      weather
    }
  })
)
