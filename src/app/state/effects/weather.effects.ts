import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { EMPTY } from 'rxjs'
import { map, exhaustMap, catchError } from 'rxjs/operators'
import { DataAutocomplete, WeatherActionsTypes, WeatherResponseApi } from 'src/app/core/models/weather.model'
import { WeatherApiServiceService } from 'src/app/services/weather-api/weather-api.service'
import { normalizeData } from 'src/app/utils/utils'
@Injectable()
export class WeatherEffects {
  constructor (
    private readonly actions$: Actions,
    private readonly weatherApiServiceService: WeatherApiServiceService) {}

  loadWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType(WeatherActionsTypes.LOAD),
      exhaustMap(({ location }: DataAutocomplete) => {
        const { place, ...rest } = location
        return this.weatherApiServiceService.weatherRequest(rest).pipe(
          map(({ city, ...rest }: WeatherResponseApi) => {
            const normalize = normalizeData({
              city: {
                ...city,
                name: location.place
              },
              ...rest
            })
            return {
              type: WeatherActionsTypes.LOADER,
              weather: normalize
            }
          }),
          catchError(() => EMPTY)
        )
      }
      )
    )
  )
}
