import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AccordionContainerComponent } from './container/accordion-container/accordion-container.component'
import { AccordionComponent } from './components/accordion/accordion.component'

@NgModule({
  declarations: [
    AccordionContainerComponent,
    AccordionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccordionContainerComponent
  ]
})
export class AccordionContainerModule { }
