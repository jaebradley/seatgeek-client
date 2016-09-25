import {expect} from 'chai';

import Client from '../src/index';

import GenresResponse from '../src/data/GenresResponse';
import exampleGenres from './files/genres.json';

describe('Test Client', function() {
  let genresResponse = GenresResponse.deserializeResponse(exampleGenres);
  it('test genres fetch', function() {
    return Client.fetchGenres(150)
                 .then(response => expect(response).to.eql(genresResponse));
  });
});
