import { Component } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { WeatherModel } from 'src/app/core/models/weather.model'
import { AppState } from 'src/app/state/app.state'
import { selectListWeather } from 'src/app/state/selectors/weather.selector'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public weather$: Observable<WeatherModel> = new Observable()
  public firstCall: boolean = true

  constructor (private readonly store: Store<AppState>) {}

  ngOnInit (): void {
    this.weather$ = this.store.select(selectListWeather)
    this.weather$.subscribe((response: WeatherModel) => {
      this.isFirstCall(response)
    })
  }

  isFirstCall (currentWeather: WeatherModel): void {
    if (currentWeather.list.length > 0) {
      this.firstCall = false
    }
  }
}
