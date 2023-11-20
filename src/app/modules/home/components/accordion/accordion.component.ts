import { Component, Input } from '@angular/core'
import { Store } from '@ngrx/store'
import { WeatherModel } from 'src/app/core/models/weather.model'
import { loadedWeather } from 'src/app/state/actions/weather.actions'
import { AppState } from 'src/app/state/app.state'
import { emptyWeatherModel } from 'src/app/state/reducers/weather.reducers'
import { getDayName, reverseData } from '../../../../utils/utils'

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent {
  @Input() weather: WeatherModel = emptyWeatherModel
  public selectedOption: string = 'Asc'
  public openIndex: number = 0

  constructor (public readonly store: Store<AppState>) {}

  changeOrder (): void {
    const cloneWeather: WeatherModel = { ...this.weather }
    cloneWeather.weatherByDays = reverseData(cloneWeather.weatherByDays)
    this.store.dispatch(loadedWeather({ weather: cloneWeather }))
  }

  changeIndex (index: number): void {
    this.openIndex = index
  }

  formatDayLabel (date: Date): string {
    const dateFormat = new Date(date.toString())
    return `${getDayName(dateFormat)} ${dateFormat.getDate()}`
  }
}
