import { Component } from '@angular/core'
import { Loader } from '@googlemaps/js-api-loader'
import { environment } from 'src/environments/environment.dev'
import { AutocompleteValue } from 'src/app/core/types'
import { Store } from '@ngrx/store'
import { loadWeather, loadedWeather } from 'src/app/state/actions/weather.actions'
import { WeatherApiServiceService } from 'src/app/services/weather-api.service.service'
import { WeatherResponseApi } from 'src/app/core/models/weather.model'
import { normalizeData } from '../../utils/utils'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private autocomplete: any

  loader = new Loader({
    apiKey: environment.API_KEY_MAP,
    version: 'weekly'
  })

  optionsAutocomplete = {
    types: ['(regions)']
  }

  constructor (
    private readonly weatherApiService: WeatherApiServiceService,
    private readonly store: Store<any>
  ) {}

  ngAfterViewInit (): void {
    const input = document.getElementById('autocomplete-input') as HTMLInputElement
    this.autocomplete = new google.maps.places.Autocomplete(input, this.optionsAutocomplete)
    this.autocomplete.addListener('place_changed', () => this.onPlaceChanged())
  }

  private onPlaceChanged (): void {
    const place = this.autocomplete.getPlace()
    this.saveInformation({
      place: place.name,
      lat: place.geometry.location.lat(),
      lon: place.geometry.location.lng()
    })
  }

  saveInformation (value: AutocompleteValue): void {
    this.store.dispatch(loadWeather())
    this.weatherApiService.weatherRequest(value).subscribe(({ city, ...rest }: WeatherResponseApi) => {
      const normalize = normalizeData({
        city: {
          ...city,
          name: value.place
        },
        ...rest
      })
      this.store.dispatch(loadedWeather({
        weather: { ...normalize }
      }))
    })
  }
}
