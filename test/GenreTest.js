import {expect} from 'chai';

import Genre from '../src/data/Genre';

import exampleGenre from './files/genre.json';

describe('Deserialize JSON to Genre', function() {
  const genre = new Genre(exampleGenre);

  it('test genre deserialization', function() {
    expect(genre.id).to.equal(450);
  });
});