import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'
import { EmitValueInput } from '../utils/types'

@Injectable({
  providedIn: 'root'
})
export class DataShareService {
  private readonly data = new BehaviorSubject<EmitValueInput>({
    codeFlag: '',
    name: '',
    lat: 0,
    lng: 0
  })

  private readonly skeletonLoading = new BehaviorSubject<boolean>(true)

  dataShared = this.data.asObservable()
  skeletonShared = this.skeletonLoading.asObservable()

  emitData (value: EmitValueInput): void {
    this.data.next(value)
  }

  setSkeletonStatus (value: boolean): void {
    this.skeletonLoading.next(value)
  }
}
