import { Component, Input, OnChanges, SimpleChanges } from '@angular/core'

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class AccordionComponent implements OnChanges {
  @Input() dataAccordion: any[] = []

  ngOnChanges (changes: SimpleChanges): void {
    console.log(changes)
  }
}
