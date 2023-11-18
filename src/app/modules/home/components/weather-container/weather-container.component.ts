import { Component, Input } from '@angular/core'
import { List } from 'src/app/core/models/weather.model'

@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss']
})
export class WeatherContainerComponent {
  @Input() weather!: List[]
}
