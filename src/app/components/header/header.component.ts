import { Component } from '@angular/core'
import { DataShareService } from 'src/app/services/data-share.service'
import { Loader } from '@googlemaps/js-api-loader'
import { environment } from 'src/environments/environment.dev'
import { AddressComponent, EmitValueInput } from 'src/app/core/types'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  private autocomplete: any

  loader = new Loader({
    apiKey: environment.API_KEY_MAP,
    version: 'weekly'
  })

  optionsAutocomplete = {
    types: ['(regions)']
  }

  constructor (private readonly dataShareService: DataShareService) {}

  ngAfterViewInit (): void {
    const input = document.getElementById('autocomplete-input') as HTMLInputElement
    this.autocomplete = new google.maps.places.Autocomplete(input, this.optionsAutocomplete)
    this.autocomplete.addListener('place_changed', () => this.onPlaceChanged())
  }

  private onPlaceChanged (): void {
    const place = this.autocomplete.getPlace()
    // console.log(place.geometry.location.lat(), place.geometry.location.lng())
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    if (place.address_components) {
      const countryComponent = (place.address_components as AddressComponent[]).find(
        (component: AddressComponent) => component.types.includes('country')
      )
      const shortName = (countryComponent != null) ? countryComponent.short_name : null
      this.emitSearch({
        codeFlag: shortName ?? '', name: place.formatted_address, lat: place.geometry.location.lat(), lng: place.geometry.location.lng()
      })
    }
  }

  emitSearch (value: EmitValueInput): void {
    this.dataShareService.emitData(value)
    this.dataShareService.setSkeletonStatus(false)
  }
}
