import { Store } from '@ngrx/store'
import { HomeComponent } from './home.component'
import { ComponentFixture, TestBed } from '@angular/core/testing'
import { AppState } from 'src/app/state/app.state'
import { of } from 'rxjs'

xdescribe('HomeComponent', () => {
  let component: HomeComponent
  let fixture: ComponentFixture<HomeComponent>
  let store: Store<AppState>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [
        {
          provide: Store,
          useValue: {
            select: (selector: boolean) => of(false)
          }
        }
      ]
    })
      .compileComponents()
    store = TestBed.inject(Store)
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
