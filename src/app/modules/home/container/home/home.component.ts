import { Component, OnDestroy, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { WeatherModel } from 'src/app/core/models/weather.model'
import { AppState } from 'src/app/state/app.state'
import { selectListWeather } from 'src/app/state/selectors/weather.selector'
import { Address } from 'ngx-google-places-autocomplete/objects/address'
import { Options } from 'ngx-google-places-autocomplete/objects/options/options'
import { GoogleApiService } from 'src/app/services/google-api.service'

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

  constructor (
    private readonly store: Store<AppState>,
    private readonly googleApiService: GoogleApiService
  ) {
    this.weather$ = this.store.select(selectListWeather)
    this.options = googleApiService.options
    this.handleChange = (address: Address) =>
      googleApiService.handleChange(address)
  }

  ngOnInit (): void {
    this.startPlaceChangeInterval()
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
