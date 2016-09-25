import {expect} from 'chai';

import GenresResponse from '../src/data/GenresResponse';

import exampleGenres from './files/genres.json';

describe('Deserialize JSON to GenresResponse', function() {
  const genresResponse = GenresResponse.deserializeResponse(exampleGenres);

  it('test genres response deserialization', function() {
    expect(genresResponse.genres.size).to.equal(17);
  });
});
