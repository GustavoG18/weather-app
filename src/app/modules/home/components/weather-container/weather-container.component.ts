import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { List } from 'src/app/core/models/weather.model'
@Component({
  selector: 'app-weather-container',
  templateUrl: './weather-container.component.html',
  styleUrls: ['./weather-container.component.scss']
})
export class WeatherContainerComponent implements OnChanges {
  @Input() weather!: List[]

  public data: any = []
  options: any

  ngOnChanges (changes: SimpleChanges): void {
    if (this.weather.length > 0 && this.data.length === 0) {
      this.data = this.weather.map(({ main }) => main.temp)
      const labels = this.weather.map((weather) => `${new Date(weather.dt_txt).getHours()}H`)
      const documentStyle = getComputedStyle(document.documentElement)
      const textColor = documentStyle.getPropertyValue('--text-color')
      const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary')
      const surfaceBorder = documentStyle.getPropertyValue('--surface-border')

      this.data = {
        labels,
        datasets: [
          {
            label: 'Temperatura en °C',
            data: this.data,
            fill: true,
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            tension: 0.4,
            backgroundColor: 'rgb(133, 64, 245, 0.5)'
          }
        ]
      }

      this.options = {
        maintainAspectRatio: true,
        aspectRatio: 2,
        plugins: {
          legend: {
            labels: {
              color: textColor
            }
          }
        },
        scales: {
          x: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          },
          y: {
            ticks: {
              color: textColorSecondary
            },
            grid: {
              color: surfaceBorder,
              drawBorder: false
            }
          }
        }
      }
    }
  }
}
