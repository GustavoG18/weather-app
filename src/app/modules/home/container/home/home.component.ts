import { Component, OnInit } from '@angular/core'
import { Loader } from '@googlemaps/js-api-loader'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { WeatherModel, WeatherResponseApi } from 'src/app/core/models/weather.model'
import { AutocompleteValue } from 'src/app/core/types'
import { WeatherApiServiceService } from 'src/app/services/weather-api/weather-api.service.service'
import { loadWeather, loadedWeather } from 'src/app/state/actions/weather.actions'
import { AppState } from 'src/app/state/app.state'
import { selectListWeather } from 'src/app/state/selectors/weather.selector'
import { normalizeData } from 'src/app/utils/utils'
import { environment } from 'src/environments/environment.dev'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public weather$: Observable<WeatherModel> = new Observable()
  public firstCall: boolean = true
  private autocomplete: any

  loader = new Loader({
    apiKey: environment.API_KEY_MAP,
    version: 'weekly'
  })

  optionsAutocomplete = {
    types: ['(regions)']
  }

  constructor (private readonly store: Store<AppState>, private readonly weatherApiService: WeatherApiServiceService) {}

  ngAfterViewInit (): void {
    const input = document.getElementById('autocomplete-input-main') as HTMLInputElement
    this.autocomplete = new google.maps.places.Autocomplete(input, this.optionsAutocomplete)
    this.autocomplete.addListener('place_changed', () => this.onPlaceChanged())
  }

  ngOnInit (): void {
    this.weather$ = this.store.select(selectListWeather)
    this.weather$.subscribe((response: WeatherModel) => {
      console.log({ response })
      this.isFirstCall(response)
    })
  }

  isFirstCall (currentWeather: WeatherModel): void {
    if (currentWeather.weatherByDays.length > 0) {
      this.firstCall = false
    }
  }

  private onPlaceChanged (): void {
    const place = this.autocomplete.getPlace()
    console.log({ place })
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
