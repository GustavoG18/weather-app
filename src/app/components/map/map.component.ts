import { Component, OnInit } from '@angular/core'
import { Loader } from '@googlemaps/js-api-loader'
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

  ngOnInit (): void {
    this.loader.load().then(async (_) => {
      const { Map } = await google.maps.importLibrary('maps') as google.maps.MapsLibrary
      this.map = new Map(document.getElementById('map') as HTMLElement, {
        center: { lat: 10.977539, lng: -74.810630 },
        zoom: 12,
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
        position: { lat: 10.977539, lng: -74.810630 },
        map: this.map,
        title: 'Barranquilla'
      })
    }).catch(e => { console.error(e) })
  }
}
