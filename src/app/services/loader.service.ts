import { Injectable } from '@angular/core'
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoaderShareService {
  private readonly skeletonLoading = new BehaviorSubject<boolean>(true)

  skeletonShared = this.skeletonLoading.asObservable()

  setSkeletonStatus (value: boolean): void {
    this.skeletonLoading.next(value)
  }
}
