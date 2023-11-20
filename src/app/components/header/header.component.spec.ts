import { GooglePlaceModule } from 'ngx-google-places-autocomplete'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HeaderComponent } from './header.component'
import { WeatherApiServiceService } from 'src/app/services/weather-api/weather-api.service'
import { Store } from '@ngrx/store'
import { AppState } from 'src/app/state/app.state'

xdescribe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>
  let weatherApiServiceSpy: jasmine.SpyObj<WeatherApiServiceService>
  let storeSpy: jasmine.SpyObj<Store<AppState>>

  beforeEach(async () => {
    weatherApiServiceSpy = jasmine.createSpyObj('WeatherApiServiceService', ['weatherRequest'])
    storeSpy = jasmine.createSpyObj('Store', ['dispatch'])
    await TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      providers: [
        {
          provide: WeatherApiServiceService,
          useValue: weatherApiServiceSpy
        },
        {
          provide: Store,
          useValue: storeSpy
        }
      ],
      imports: [
        GooglePlaceModule
      ]
    })
      .compileComponents()

    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
