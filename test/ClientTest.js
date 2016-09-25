import {expect} from 'chai';

import Client from '../src/index';

import exampleGenres from './files/genres.json';

describe('Test Client', function() {
  it('test genres fetch', function() {
    return Client.getGenres(150)
                 .then(response => expect(response).to.eql(exampleGenres));
  });
});
