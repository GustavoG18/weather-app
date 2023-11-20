import { Component, OnInit } from '@angular/core'
import { GoogleApiService } from 'src/app/services/google-api.service'
import { Options } from 'ngx-google-places-autocomplete/objects/options/options'
import { Address } from 'ngx-google-places-autocomplete/objects/address'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/state/app.state'
import { WeatherModel } from 'src/app/core/models/weather.model'
import { Observable } from 'rxjs'
import { selectListWeather } from 'src/app/state/selectors/weather.selector'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public options!: Options
  public handleChange!: (address: Address) => void

  public weather$: Observable<WeatherModel> = new Observable()
  public firstCall: boolean = true

  constructor (
    public readonly googleApiService: GoogleApiService,
    public readonly store: Store<AppState>
  ) {
    this.options = googleApiService.options
    this.handleChange = (address: Address) => googleApiService.handleChange(address)
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
}
