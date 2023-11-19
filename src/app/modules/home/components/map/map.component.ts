import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core'
import { Loader } from '@googlemaps/js-api-loader'
import { environment } from 'src/environments/environment.dev'

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {
  private map!: google.maps.Map
  private market!: google.maps.Marker

  @Input() lat: number = 0
  @Input() lon: number = 0
  @Input() placeName: string = ''

  private readonly loader = new Loader({
    apiKey: environment.API_KEY_MAP,
    version: 'weekly'
  })

  ngOnChanges (changes: SimpleChanges): void {
    if (this.lat !== 0 || this.lon !== 0) {
      this.loader.load().then(async (_) => {
        const { Map } = await google.maps.importLibrary('maps') as google.maps.MapsLibrary
        this.map = new Map(document.getElementById('map') as HTMLElement, {
          center: { lat: this.lat, lng: this.lon },
          zoom: 6,
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
          position: { lat: this.lat, lng: this.lon },
          map: this.map,
          title: this.placeName
        })
      }).catch(e => { console.error(e) })
    }
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async ngOnInit () {
    this.loader.load().then(async (_) => {
      const { Map } = await google.maps.importLibrary('maps') as google.maps.MapsLibrary
      this.map = new Map(document.getElementById('map') as HTMLElement, {
        center: { lat: this.lat, lng: this.lon },
        zoom: 6,
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
        position: { lat: this.lat, lng: this.lon },
        map: this.map,
        title: this.placeName
      })
    }).catch(e => { console.error(e) })
  }
}
