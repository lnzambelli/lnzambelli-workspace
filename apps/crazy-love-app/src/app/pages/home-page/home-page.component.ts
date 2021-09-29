import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CardDto } from '../../../../../../libraries/menu-library/src/lib/dashboard/card';

@Component({
  selector: 'ace-home-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ace-dashboard [cards]="cards"></ace-dashboard>
  `
})
export class HomePageComponent implements OnInit {
  public cards!: Array<CardDto>;

  ngOnInit(): void {
    this.cards = [];// importar donde estan los datos
  }
}
