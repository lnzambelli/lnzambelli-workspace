import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'ace-accordion-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
  <mat-expansion-panel disabled>
    <mat-expansion-panel-header>
        <mat-panel-title *ngFor="let header of headers">
            {{header}}
        </mat-panel-title>
    </mat-expansion-panel-header>
  </mat-expansion-panel>
  `
})
export class AccordionHeaderComponent {
  @Input() headers!: Array<string> | null;
}
