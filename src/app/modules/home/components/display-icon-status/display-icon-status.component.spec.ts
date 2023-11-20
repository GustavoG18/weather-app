import { ComponentFixture, TestBed } from '@angular/core/testing'
import { DisplayIconStatusComponent } from './display-icon-status.component'

describe('DisplayIconStatusComponent', () => {
  let component: DisplayIconStatusComponent
  let fixture: ComponentFixture<DisplayIconStatusComponent>
  let element: HTMLElement

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisplayIconStatusComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayIconStatusComponent)
    component = fixture.componentInstance
    element = fixture.nativeElement
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should display the correct icon URL', () => {
    const testIconUrl = 'https://openweathermap.org/img/wn/10n@2x.png'
    component.iconUrl = testIconUrl
    fixture.detectChanges()
    const img = element.querySelector('img')
    expect(img).toBeTruthy()
    expect(img?.src).toContain(testIconUrl)
  })
})
