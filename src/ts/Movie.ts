export default class Movie {
  readonly _title: string;

  readonly _age: number;

  readonly _country: string;

  readonly _slogan: string;

  readonly _genre: string;

  readonly _time: string;

  constructor(
    title: string,
    age: number,
    country: string,
    slogan: string,
    genre: string,
    time: string,
  ) {
    this._title = title;
    this._age = age;
    this._country = country;
    this._slogan = slogan;
    this._genre = genre;
    this._time = time;
  }
}