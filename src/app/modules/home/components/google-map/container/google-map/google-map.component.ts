import { Component } from '@angular/core'
import { DataShareService } from 'src/app/services/data-share.service'

@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.scss']
})
export class GoogleMapComponent {
  loading = true
  constructor (private readonly dataShareService: DataShareService) {
    dataShareService.skeletonShared.subscribe((loading) => {
      this.loading = loading
    })
  }
}
