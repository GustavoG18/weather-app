import { Component, ViewChild, ElementRef } from '@angular/core'
import { DataShareService } from 'src/app/services/data-share.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @ViewChild('placeToSearch') placeToSearch: ElementRef | undefined

  constructor (private readonly dataShareService: DataShareService) {}

  emitSearch (): void {
    const inputValue = this.placeToSearch?.nativeElement.value
    this.dataShareService.emitData(inputValue)
  }
}
