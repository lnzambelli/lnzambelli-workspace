export interface CardDto {
  title: string;
  picture: string;
  buttons: {
    caption: string;
    url: string;
  }
}

export class CardButton {
  constructor(public caption: string, public url: string) { }
}

export class Card {
  constructor(public title: string, public imagen: string, public buttons: CardButton[]) { }
}