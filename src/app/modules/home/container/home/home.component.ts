import { Component } from '@angular/core'
import { DataShareService } from 'src/app/services/data-share.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public countryCode: string = 'co'
  public city: string = 'Colombia'

  constructor (private readonly dataShareService: DataShareService) {
    dataShareService.dataShared.subscribe(data => {
      this.countryCode = 'co'
      this.city = 'Colombia'
    })
  }
}
