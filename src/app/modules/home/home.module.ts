import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './container/home/home.component'
import { MapComponent } from './components/map/map.component'
// import { AccordionContainerModule } from './components/accordion-container/accordion-container.module'

@NgModule({
  declarations: [
    HomeComponent,
    MapComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
