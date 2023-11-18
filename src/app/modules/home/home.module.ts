import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { HomeRoutingModule } from './home-routing.module'
import { HomeComponent } from './container/home/home.component'
import { GoogleMapModule } from './components/google-map/google-map.module';
import { TitleComponent } from './components/title/title.component'

@NgModule({
  declarations: [
    HomeComponent,
    TitleComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    GoogleMapModule
  ]
})
export class HomeModule { }
