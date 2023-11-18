import { Component, OnInit } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { AppState } from 'src/app/state/app.state'
import { selectLoading } from 'src/app/state/selectors/weather.selector'

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  loader$: Observable<any> = new Observable()

  constructor (private readonly store: Store<AppState>) {}

  ngOnInit (): void {
    this.loader$ = this.store.select(selectLoading)
  }
}
