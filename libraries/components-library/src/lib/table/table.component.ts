import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, NgModule, OnChanges, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'ace-table',
  templateUrl: './table.component.html',
  styleUrls: ['table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnChanges {
  @Input() data!: any;
  @Output() rowClicked = new EventEmitter();

  dataSource!: Array<any>;
  displayedColumns!: string[];

  constructor() { }

  ngOnChanges(): void {
    if (this.data) {
      this.dataSource = this.data;
      for (let key of this.data) {
        this.displayedColumns = Object.keys(key);
      }
    }
  }

  onRowClicked(row: any) {
    this.rowClicked.emit(row);
  }
}

@NgModule({
  declarations: [
    TableComponent
  ],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports: [
    TableComponent
  ],
})
export class TableModule { }
