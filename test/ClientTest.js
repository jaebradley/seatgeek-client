import dotenv from 'dotenv';
dotenv.load();

import {expect} from 'chai';

import {SeatGeekClient} from '../src/index';
import {Genre} from '../src/index';
import {Taxonomy, TaxonomyField} from '../src/index';

describe('Test Client', function() {
  let client = new SeatGeekClient(process.env.CLIENT_ID);
  it('tests genres fetch', function() {
    return client.getGenres({perPage: 150})
                 .then(response => expect(response.genres.length).to.equal(Genre.enumValues.length));
  });

  it('tests taxonomies fetch', function() {
    return client.getTaxonomies({perPage: 100})
                 .then(response => expect(response.taxonomies.length).to.equal(Taxonomy.enumValues.length));
  });

  it('tests venues fetch', function() {
    return client.getVenues({cityName: 'Boston'})
                 .then(response => console.log(response));
  });

  it('tests events fetch', function() {
    return client.getEvents({venues: {properties: {cityName: 'Boston', stateCode: 'MA'}}})
                 .then(response => console.log(response));
  });

  it('tests events fetch', function() {
    return client.getEvents({taxonomies: [{
        taxonomy: Taxonomy.CONCERT,
        field: TaxonomyField.NAME,
      }]})
                 .then(response => console.log(response));
  })
});
