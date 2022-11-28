import { expect, test } from '@jest/globals';
import Cart from '../Cart';
import Movie from '../Movie';

test('', () => {
  const cart = new Cart();
  const movie = new Movie(
    'Мстители',
    2012,
    'США',
    '"Avengers Assemble!',
    'фантастика, боевик, фэнтези, приключения',
    '137 мин. / 02:17',
  );

  cart.add(movie);

  expect(cart.items[0]).toEqual(movie);
});