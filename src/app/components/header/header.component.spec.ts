import { ComponentFixture, TestBed } from '@angular/core/testing'
import { HeaderComponent } from './header.component'
import { WeatherApiServiceService } from 'src/app/services/weather-api.service.service'
import { Store } from '@ngrx/store'
import { googleTesting } from '../../test/mock/maps.googleapis.com-maps-api'

describe('HeaderComponent', () => {
  let component: HeaderComponent
  let fixture: ComponentFixture<HeaderComponent>
  let weatherApiServiceSpy: jasmine.SpyObj<WeatherApiServiceService>
  let storeSpy: jasmine.SpyObj<Store<any>>

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
      ]
    })
      .compileComponents()

    window.google = googleTesting

    fixture = TestBed.createComponent(HeaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
