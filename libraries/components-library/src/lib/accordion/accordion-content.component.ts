import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ace-accordion-content',
  templateUrl: './accordion-content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccordionContentComponent {
  @Input() data!: any;
  @Input() keys!: Array<string>;
  @Input() expanded = false;
}
