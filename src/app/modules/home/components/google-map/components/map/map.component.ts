import { Component, OnInit } from '@angular/core'
import { Loader } from '@googlemaps/js-api-loader'
import { DataShareService } from 'src/app/services/data-share.service'
import { EmitValueInput } from 'src/app/utils/types'
import { environment } from 'src/environments/environment.dev'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  private map!: google.maps.Map
  private market!: google.maps.Marker

  loader = new Loader({
    apiKey: environment.API_KEY_MAP,
    version: 'weekly'
  })

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
      if (Boolean(this.valueToSearch.lat) || Boolean(this.valueToSearch.lng)) {
        this.loader.load().then(async (_) => {
          const { Map } = await google.maps.importLibrary('maps') as google.maps.MapsLibrary
          this.map = new Map(document.getElementById('map') as HTMLElement, {
            center: { lat: this.valueToSearch.lat, lng: this.valueToSearch.lng },
            zoom: 5,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
            zoomControl: false,
            rotateControl: false,
            scaleControl: false,
            draggable: false,
            scrollwheel: false,
            disableDoubleClickZoom: true
          })
          this.market = new google.maps.Marker({
            position: { lat: this.valueToSearch.lat, lng: this.valueToSearch.lng },
            map: this.map,
            title: this.valueToSearch.name
          })
        }).catch(e => { console.error(e) })
      }
    })
  }

  ngOnInit (): void {

  }
}
