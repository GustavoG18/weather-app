// import { HttpResponse } from '@angular/common/http'
import { Component } from '@angular/core'
import { DataShareService } from 'src/app/services/data-share.service'
import { EmitValueInput } from 'src/app/utils/types'
// import { HeadResponse, WeatherApiServiceService } from 'src/app/services/weather-api.service.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public valueToSearch: EmitValueInput = {
    codeFlag: '',
    name: '',
    lat: 0,
    lng: 0
  }

  constructor (private readonly dataShareService: DataShareService) {
    dataShareService.dataShared.subscribe(({ codeFlag, ...rest }) => {
      this.valueToSearch = {
        codeFlag: codeFlag.toLocaleLowerCase(),
        ...rest
      }
      // this.weatherService.statusRequest(this.city).subscribe((response: HttpResponse<HeadResponse>) => {
      //   if (response.status === 200) {
      //     this.weatherService.weatherRequest(this.city).subscribe((response: any) => { console.log({ response }) })
      //   }
      // })
    })
  }
}
