import { TestBed } from '@angular/core/testing'
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'
import { WeatherApiServiceService } from './weather-api.service.service'
import { Endpoints } from '../../core/endpoints'
import { environment } from 'src/environments/environment.dev'
import { expectedData } from 'src/app/test/mocks/weatherResponse.mock'

describe('WeatherApiServiceService', () => {
  let service: WeatherApiServiceService
  let httpTestingController: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherApiServiceService]
    })

    service = TestBed.inject(WeatherApiServiceService)
    httpTestingController = TestBed.inject(HttpTestingController)
  })

  afterEach(() => {
    httpTestingController.verify()
  })

  it('should be created', () => {
    expect(service).toBeTruthy()
  })

  it('should return expected weather data when call weatherRequest function', () => {
    const testCoords = {
      lat: 35,
      lon: 139
    }

    service.weatherRequest(testCoords).subscribe(
      data => expect(data).toEqual(expectedData),
      fail
    )

    const req = httpTestingController.expectOne(
      `${Endpoints.WEATHER_API}?lat=${testCoords.lat}&lon=${testCoords.lon}&appid=${environment.API_WEATHER_KEY}&units=metric&lang=es`
    )
    expect(req.request.method).toEqual('GET')

    req.flush(expectedData)
  })
})
