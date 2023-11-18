import { ActionReducerMap } from '@ngrx/store'
import { WeatherState } from '../core/models/weather.state'
import { weatherReducer } from './reducers/weather.reducers'

export interface AppState {
  weather: WeatherState
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
  weather: weatherReducer
}
