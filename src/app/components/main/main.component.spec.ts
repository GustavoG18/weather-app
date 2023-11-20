import { ComponentFixture, TestBed } from '@angular/core/testing'
import { By } from '@angular/platform-browser'
import { Store } from '@ngrx/store'
import { of } from 'rxjs'
import { MainComponent } from './main.component'
import { AppState } from 'src/app/state/app.state'

import { MockComponent } from 'ng-mocks'
import { HeaderComponent } from '../header/header.component'
import { LoaderComponent } from '../loader/loader.component'
import { FooterComponent } from '../footer/footer.component'
import { RouterTestingModule } from '@angular/router/testing'

describe('MainComponent', () => {
  let component: MainComponent
  let fixture: ComponentFixture<MainComponent>
  let store: Store<AppState>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        MainComponent,
        MockComponent(HeaderComponent),
        MockComponent(LoaderComponent),
        MockComponent(FooterComponent)
      ],
      providers: [
        {
          provide: Store,
          useValue: {
            select: (selector: any) => of(false)
          }
        }
      ],
      imports: [RouterTestingModule]
    }).compileComponents()

    store = TestBed.inject(Store)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(MainComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })

  it('should display the loader when loader$ emits true', () => {
    spyOn(store, 'select').and.returnValue(of(true))
    component.ngOnInit()
    fixture.detectChanges()
    const loaderElement = fixture.debugElement.query(By.directive(LoaderComponent))
    expect(loaderElement).not.toBeNull()
  })

  it('should not display the loader when loader$ emits false', () => {
    spyOn(store, 'select').and.returnValue(of(false))
    component.ngOnInit()
    fixture.detectChanges()
    const loaderElement = fixture.debugElement.query(By.directive(LoaderComponent))
    expect(loaderElement).toBeNull()
  })
})
