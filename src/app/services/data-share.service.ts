import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  private readonly data = new BehaviorSubject('')
  dataShared = this.data.asObservable()

  emitData (information: string): void {
    this.data.next(information)
  }
}
