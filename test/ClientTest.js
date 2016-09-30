import {expect} from 'chai';

import Client from '../src/index';
import Genre from '../src/data/Genre';
import Taxonomy from '../src/data/Taxonomy';

import exampleTaxonomies from './files/taxonomies.json';

describe('Test Client', function() {
  it('tests genres fetch', function() {
    return Client.getGenres(150)
                 .then(response => expect(response.genres.length).to.equal(Genre.enumValues.length));
  });

  it('tests taxonomies fetch', function() {
    return Client.getTaxonomies(100)
                 .then(response => expect(response.taxonomies.length).to.equal(Taxonomy.enumValues.length));
  });

  it('tests venues fetch', function() {
    return Client.getVenues('Boston')
                 .then(response => console.log(response));
  });
});
