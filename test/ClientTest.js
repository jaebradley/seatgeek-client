import {expect} from 'chai';

import {SeatGeekClient} from '../src/index';
import {Genre} from '../src/index';
import {Taxonomy, TaxonomyField} from '../src/index';

describe('Test Client', function() {
  it('tests genres fetch', function() {
    return SeatGeekClient.getGenres({perPage: 150})
                 .then(response => expect(response.genres.length).to.equal(Genre.enumValues.length));
  });

  it('tests taxonomies fetch', function() {
    return SeatGeekClient.getTaxonomies({perPage: 100})
                 .then(response => expect(response.taxonomies.length).to.equal(Taxonomy.enumValues.length));
  });

  it('tests venues fetch', function() {
    return SeatGeekClient.getVenues({cityName: 'Boston'})
                 .then(response => console.log(response));
  });

  it('tests events fetch', function() {
    return SeatGeekClient.getEvents({venues: {properties: {cityName: 'Boston', stateCode: 'MA'}}})
                 .then(response => console.log(response));
  });

  it('tests events fetch', function() {
    return SeatGeekClient.getEvents({taxonomies: [{
        taxonomy: Taxonomy.CONCERT,
        field: TaxonomyField.NAME,
      }]})
                 .then(response => console.log(response));
  })
});
