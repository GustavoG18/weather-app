import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { EMPTY } from 'rxjs'
import { map, exhaustMap, catchError } from 'rxjs/operators'
// import { LocationModel } from 'src/app/core/models/weather.model'
import { WeatherApiServiceService } from 'src/app/services/weather-api/weather-api.service.service'
import { normalizeData } from 'src/app/utils/utils'

@Injectable()
export class WeatherEffects {
  loadWeather$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Weather List] load weather'),
      exhaustMap(({ location }: any) =>
        this.weatherApiServiceService.weatherRequest({
          lat: location.lat,
          lon: location.lon
        }).pipe(
          map(({ city, ...rest }) => {
            const normalize = normalizeData({
              city: {
                ...city,
                name: location.place
              },
              ...rest
            })
            return {
              type: '[Weather List] loaded weather',
              weather: normalize
            }
          }),
          catchError(() => EMPTY)
        )
      )
    )
  )

  constructor (private readonly actions$: Actions, private readonly weatherApiServiceService: WeatherApiServiceService) {}
}
