import { Store } from '../store';
import { Card, CardButton } from './card';

export class CardsStore extends Store<Card[]>{
  constructor() {
    super([]);
  }

  public empty() {
    this.setState([]);
  }

  public add(title: string, imagen: string, botones: CardButton[]) {
    const existeCard = this.state.find(card => card.imagen === imagen);
    if (!existeCard) {
      this.setState([...this.state, new Card(title, imagen, botones)]);
    }
  }
}