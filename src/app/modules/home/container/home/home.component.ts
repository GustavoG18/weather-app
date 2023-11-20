import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { WeatherModel } from 'src/app/core/models/weather.model'
import { AppState } from 'src/app/state/app.state'
import { selectListWeather } from 'src/app/state/selectors/weather.selector'
import { Address } from 'ngx-google-places-autocomplete/objects/address'
import { Options } from 'ngx-google-places-autocomplete/objects/options/options'
import { GoogleApiService } from 'src/app/services/google-api/google-api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  weather$: Observable<WeatherModel> = new Observable()
  changePlaceInterval!: any
  options: Options
  handleChange: (address: Address) => void

  places: string[] = [
    'Barranquilla',
    'Barcelona',
    'Valledupar',
    'Malambo',
    'Canada',
    'Madrid'
  ]

  showAnimation = true
  currentPlace = this.places[0]
  iconUrl: string = ''

  constructor (
    private readonly store: Store<AppState>,
    private readonly googleApiService: GoogleApiService
  ) {
    this.weather$ = this.store.select(selectListWeather)
    this.weatherSubscription()
    this.options = googleApiService.options
    this.handleChange = (address: Address) =>
      googleApiService.handleChange(address)
  }

  ngOnInit (): void {
    this.startPlaceChangeInterval()
  }

  weatherSubscription (): void {
    this.weather$.subscribe(({ weatherByDays }: WeatherModel) => {
      if (weatherByDays.length > 0) {
        this.iconUrl = `https://openweathermap.org/img/wn/${weatherByDays[0][0].weather[0].icon}@2x.png`
      }
    })
  }

  private startPlaceChangeInterval (): void {
    this.changePlace()
    this.changePlaceInterval = setInterval(() => this.changePlace(), 4000)
  }

  changePlace (): void {
    const randomIndex = Math.floor(Math.random() * this.places.length)
    this.currentPlace = this.places[randomIndex]
    this.resetAnimation()
  }

  resetAnimation (): void {
    this.showAnimation = false
    setTimeout(() => {
      this.showAnimation = true
    })
  }

  ngOnDestroy (): void {
    clearInterval(this.changePlaceInterval)
  }
}
