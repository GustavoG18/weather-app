import { HttpResponse } from '@angular/common/http'
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'
import { BodyResponse, HeadResponse, List, WeatherResponse } from 'src/app/core/types'
import { WeatherApiServiceService } from 'src/app/services/weather-api.service.service'

@Component({
  selector: 'app-accordion-container',
  templateUrl: './accordion-container.component.html',
  styleUrls: ['./accordion-container.component.scss']
})
export class AccordionContainerComponent implements OnChanges {
  @Input() place: string = ''

  public weatherResponse: any

  constructor (private readonly weatherService: WeatherApiServiceService) {

  }

  ngOnChanges (changes: SimpleChanges): void {
    if (this.place !== '') {
      this.weatherService.statusRequest(this.place).subscribe((response: HttpResponse<HeadResponse>) => {
        if (response.status === 200) {
          this.weatherService.weatherRequest(this.place).subscribe((response: HttpResponse<WeatherResponse>) => {
            const responseBody = response.body as unknown as BodyResponse
            this.weatherResponse = this.splitDataByDay(responseBody?.list)
          })
        }
      })
    }
  }

  splitDataByDay (list: List[]): any[] {
    const array = [[list[0]]]
    let indexArray = 0
    for (let index = 0; index < list.length; index++) {
      const element = list[index]
      if (element.dt_txt.split(' ')[0] === array[indexArray][0].dt_txt.split(' ')[0] && element.dt_txt.split(' ')[1] !== array[indexArray][0].dt_txt.split(' ')[1]) {
        array[indexArray].push(element)
      } else if (element.dt_txt.split(' ')[0] !== array[indexArray][0].dt_txt.split(' ')[0]) {
        indexArray += 1
        array.push([element])
      }
    }
    return array
  }
}
