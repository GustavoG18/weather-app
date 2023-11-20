import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { WeatherModel } from 'src/app/core/models/weather.model'
import { AppState } from 'src/app/state/app.state'
import { selectListWeather } from 'src/app/state/selectors/weather.selector'
import { Options } from 'ngx-google-places-autocomplete/objects/options/options'
import { Address } from 'ngx-google-places-autocomplete/objects/address'
import { GoogleApiService } from 'src/app/services/google-api.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public weather$: Observable<WeatherModel> = new Observable()
  public firstCall: boolean = true

  public options!: Options
  public handleChange!: (address: Address) => void

  places: string[] = ['Barranquilla', 'Barcelona', 'Valledupar', 'Malambo', 'Canada', 'Madrid']
  showAnimation: boolean = true
  currentPlace: string = this.places[0]

  changePlace (): void {
    const randomIndex = Math.floor(Math.random() * this.places.length)
    this.currentPlace = this.places[randomIndex]
    this.resetAnimation()
  }

  resetAnimation (): void {
    this.showAnimation = false
    setTimeout(() => { this.showAnimation = true })
  }

  constructor (private readonly store: Store<AppState>, private readonly googleApiService: GoogleApiService) {
    this.options = googleApiService.options
    this.handleChange = (address: Address) => googleApiService.handleChange(address)
  }

  ngOnInit (): void {
    this.weather$ = this.store.select(selectListWeather)
    this.weather$.subscribe((response: WeatherModel) => {
      console.log({ response })
      this.isFirstCall(response)
    })
    this.changePlace()
    setInterval(() => this.changePlace(), 5000)
  }

  isFirstCall (currentWeather: WeatherModel): void {
    if (currentWeather.weatherByDays.length > 0) {
      this.firstCall = false
    }
  }
}
