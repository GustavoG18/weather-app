import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './container/home/home.component'
import { MapComponent } from './components/map/map.component'
import { AccordionComponent } from './components/accordion/accordion.component'
import { FormsModule } from '@angular/forms'
import { WeatherContainerComponent } from './components/weather-container/weather-container.component'

@NgModule({
  declarations: [
    HomeComponent,
    MapComponent,
    AccordionComponent,
    WeatherContainerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule
  ]
})
export class HomeModule { }
