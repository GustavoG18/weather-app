import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-display-icon-status',
  templateUrl: './display-icon-status.component.html',
  styleUrls: ['./display-icon-status.component.scss']
})
export class DisplayIconStatusComponent {
  @Input() iconUrl: string = ''
}
