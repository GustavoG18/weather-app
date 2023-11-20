import { ComponentFixture, TestBed } from '@angular/core/testing'
import { LoaderComponent } from './loader.component'

describe('LoaderComponent', () => {
  let component: LoaderComponent
  let fixture: ComponentFixture<LoaderComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoaderComponent]
    })
      .compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(LoaderComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should display a spinner', () => {
    const compiled = fixture.debugElement.nativeElement
    const spinner = compiled.querySelector('.spinner-grow')
    expect(spinner).not.toBeNull()
    expect(spinner.getAttribute('role')).toEqual('status')
  })

  it('should have text "Loading..." hidden visually but accessible', () => {
    const compiled = fixture.debugElement.nativeElement
    const span = compiled.querySelector('.spinner-grow .visually-hidden')
    expect(span).not.toBeNull()
    expect(span.textContent).toContain('Loading...')
  })
})
