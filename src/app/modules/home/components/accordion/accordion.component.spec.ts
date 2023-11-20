import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { StoreModule } from '@ngrx/store'
import { AccordionComponent } from './accordion.component'
import { FormsModule } from '@angular/forms'
import { reverseData } from 'src/app/utils/utils'
import { loadedWeather } from 'src/app/state/actions/weather.actions'

describe('AccordionComponent', () => {
  let component: AccordionComponent
  let fixture: ComponentFixture<AccordionComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AccordionComponent],
      imports: [
        FormsModule,
        StoreModule.forRoot({})
      ]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(AccordionComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should have default selectedOption as Asc', () => {
    expect(component.selectedOption).toEqual('Asc')
  })

  it('should change order on changeOrder call', () => {
    const spy = spyOn(component.store, 'dispatch')
    const cloneWeather = {
      ...component.weather
    }
    cloneWeather.weatherByDays = reverseData(cloneWeather.weatherByDays)
    component.changeOrder()
    expect(spy).toHaveBeenCalledWith(loadedWeather({ weather: cloneWeather }))
  })

  it('should change openIndex on changeIndex call', () => {
    const testIndex = 1
    component.changeIndex(testIndex)
    expect(component.openIndex).toBe(testIndex)
  })

  it('should render options correctly', () => {
    const selectElement = fixture.debugElement.query(By.css('.form-select'))
    expect(selectElement.nativeElement[0].innerText).toBe('Ascendent')
    expect(selectElement.nativeElement[1].innerText).toBe('Descendent')
  })
})
