import {expect} from 'chai';

import Client from '../src/index';

import exampleGenres from './files/genres.json';
import exampleTaxonomies from './files/taxonomies.json';

describe('Test Client', function() {
  it('tests genres fetch', function() {
    return Client.getGenres(150)
                 .then(response => expect(response.genres.length).to.equal(exampleGenres.genres.length));
  });

  it('tests taxonomies fetch', function() {
    return Client.getTaxonomies(100)
                 .then(response => expect(response.taxonomies.length).to.equal(exampleTaxonomies.taxonomies.length));
  })
});
