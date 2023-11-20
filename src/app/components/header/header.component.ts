import { Component } from '@angular/core'
import { GoogleApiService } from 'src/app/services/google-api/google-api.service'
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
export class HeaderComponent {
  public options!: Options
  public handleChange!: (address: Address) => void

  public weather$: Observable<WeatherModel> = new Observable()

  constructor (
    public readonly googleApiService: GoogleApiService,
    public readonly store: Store<AppState>
  ) {
    this.weather$ = this.store.select(selectListWeather)
    this.options = googleApiService.options
    this.handleChange = (address: Address) =>
      googleApiService.handleChange(address)
  }
}
