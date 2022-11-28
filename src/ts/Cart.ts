import Movie from './Movie';

export default class Cart {
  private _items: Movie[] = [];

  add(item: Movie): void {
    this._items.push(item);
  }

  get items() {
    return this._items;
  }
}