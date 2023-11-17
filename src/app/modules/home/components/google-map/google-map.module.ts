import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { MapComponent } from './components/map/map.component'
import { SkeletonMapComponent } from './components/skeleton-map/skeleton-map.component'
import { GoogleMapComponent } from './container/google-map/google-map.component'

@NgModule({
  declarations: [
    MapComponent,
    SkeletonMapComponent,
    GoogleMapComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    GoogleMapComponent
  ]
})
export class GoogleMapModule { }
