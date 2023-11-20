import { Component } from '@angular/core'
// import { AutocompleteValue } from 'src/app/core/types'
import { Store } from '@ngrx/store'
import { loadWeather } from 'src/app/state/actions/weather.actions'
import { WeatherApiServiceService } from 'src/app/services/weather-api/weather-api.service.service'
// import { WeatherResponseApi } from 'src/app/core/models/weather.model'
// import { normalizeData } from '../../utils/utils'
import { Options } from 'ngx-google-places-autocomplete/objects/options/options'
import { Address } from 'ngx-google-places-autocomplete/objects/address'
import { LocationModel } from 'src/app/core/models/weather.model'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  public autocomplete: any
  options: Options = new Options({
    types: ['(regions)']
  })

  constructor (
    private readonly weatherApiService: WeatherApiServiceService,
    private readonly store: Store<any>
  ) {}

  ngAfterViewInit (): void {
  }

  onPlaceChanged (address: Address): void {
    console.log({ address })
    this.saveInformation({
      place: address.name,
      lat: address.geometry.location.lat(),
      lon: address.geometry.location.lng()
    })
  }

  saveInformation (value: LocationModel): void {
    console.log(value)
    this.store.dispatch(loadWeather({ location: value }))
    // this.weatherApiService.weatherRequest(value).subscribe(({ city, ...rest }: WeatherResponseApi) => {
    //   const normalize = normalizeData({
    //     city: {
    //       ...city,
    //       name: value.place
    //     },
    //     ...rest
    //   })
    //   this.store.dispatch(loadedWeather({
    //     weather: { ...normalize }
    //   }))
    // })
  }
}
