import { Injectable, Renderer2, RendererFactory2 } from '@angular/core'
import { environment } from 'src/environments/environment.dev'

@Injectable({
  providedIn: 'root'
})
export class GoogleApiService {
  private readonly renderer: Renderer2

  constructor (rendererFactory: RendererFactory2) {
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

  // getAutocomplete (input: HTMLInputElement): google.maps.places.Autocomplete {
  //   const optionsAutocomplete = {
  //     types: ['(regions)']
  //   }
  //   return new google.maps.places.Autocomplete(input, optionsAutocomplete)
  // }
}
