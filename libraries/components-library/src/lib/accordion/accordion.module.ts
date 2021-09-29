import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { AccordionContentComponent } from './accordion-content.component';
import { AccordionHeaderComponent } from './accordion-header.component';

@NgModule({
  declarations: [
    AccordionHeaderComponent,
    AccordionContentComponent,
  ],
  imports: [
    CommonModule,
    MatExpansionModule,
  ],
  exports: [
    AccordionHeaderComponent,
    AccordionContentComponent,
  ]
})
export class AccordionModule { }
