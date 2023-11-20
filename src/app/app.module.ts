import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HeaderComponent } from './components/header/header.component'
import { MainComponent } from './components/main/main.component'
import { HttpClientModule } from '@angular/common/http'
import { FooterComponent } from './components/footer/footer.component'
import { StoreModule } from '@ngrx/store'
import { ROOT_REDUCERS } from './state/app.state'
import { FormsModule } from '@angular/forms'
import { LoaderComponent } from './components/loader/loader.component'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { GooglePlaceModule } from 'ngx-google-places-autocomplete'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    GooglePlaceModule,
    StoreModule.forRoot(ROOT_REDUCERS),
    StoreDevtoolsModule.instrument({ name: 'TEST' })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
