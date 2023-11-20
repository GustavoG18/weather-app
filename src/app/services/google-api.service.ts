import { Injectable, Renderer2, RendererFactory2 } from '@angular/core'
import { environment } from 'src/environments/environment.dev'
import { Address } from 'ngx-google-places-autocomplete/objects/address'
import { loadWeather } from '../state/actions/weather.actions'
import { Store } from '@ngrx/store'
import { Options } from 'ngx-google-places-autocomplete/objects/options/options'
import { AppState } from '../state/app.state'

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  private readonly renderer: Renderer2
  public options: Options = new Options({
    types: ['(regions)']
  })

  constructor (rendererFactory: RendererFactory2, private readonly store: Store<AppState>) {
    this.renderer = rendererFactory.createRenderer(null, null)
  }

  async loadScript (): Promise<void> {
    return await new Promise((resolve, reject) => {
      const script = this.renderer.createElement('script')
      script.type = 'text/javascript'
      script.src = `https://maps.googleapis.com/maps/api/js?key=${environment.API_KEY_MAP}&libraries=places`
      script.async = true
      script.defer = true
      this.renderer.appendChild(document.body, script)
    })
  }

  handleChange (address: Address): void {
    const location = {
      place: address.name,
      lat: address.geometry.location.lat(),
      lon: address.geometry.location.lng()
    }
    this.store.dispatch(loadWeather({ location }))
  }
}
