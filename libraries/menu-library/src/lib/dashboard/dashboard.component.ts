import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, NgModule, OnChanges } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';
import { CardButton, CardDto } from './card';
import { CardsStore } from './cards-store';

@Component({
  selector: 'ace-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnChanges {
  @Input() cards: Array<CardDto> = [];

  public cardsStore = new CardsStore();

  constructor(private router: Router) { }

  ngOnChanges(): void {
    this.createCards();
  }

  private createCards() {
    this.cardsStore.empty();
    for (let card in this.cards) {
      this.cardsStore.add(
        this.cards[card].title,
        this.cards[card].picture,
        [new CardButton(this.cards[card].buttons.caption, this.cards[card].buttons.url)]
      );
    }
  }

  public redirectTo(url: string) {
    if (url.includes('https')) {
      window.open(url);
    } else {
      this.router.navigate([url]);
    }
  }
}

@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  exports: [
    DashboardComponent
  ]
})
export class DashboardModule { }