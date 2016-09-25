import {expect} from 'chai';
import {Map} from 'immutable';

import Genre from '../src/data/Genre';

import exampleGenre from './files/genre.json';

describe('Deserialize JSON to Genre', function() {
  let genre = Genre.fromJson(exampleGenre);

  it('test genre deserialization', function() {
    expect(genre.id).to.equal(450);
    expect(genre.image).to.equal("https://chairnerd.global.ssl.fastly.net/images/performers-landscape/garth-brooks-1a6e6f/2387/huge.jpg");
    expect(genre.slug).to.equal("country");
    expect(genre.name).to.equal("Country");
    expect(genre.images.size).to.equal(20);
  });
});
