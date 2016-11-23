import {expect} from 'chai';

import {SeatGeekClient} from '../src/index';
import {Genre} from '../src/index';
import {Taxonomy} from '../src/index';

describe('Test Client', function() {
  it('tests genres fetch', function() {
    return SeatGeekClient.getGenres({perPage: 150})
                 .then(response => expect(response.genres.length).to.equal(Genre.enumValues.length))
                 .done();
  });

  it('tests taxonomies fetch', function() {
    return SeatGeekClient.getTaxonomies({perPage: 100})
                 .then(response => expect(response.taxonomies.length).to.equal(Taxonomy.enumValues.length))
                 .done();
  });

  it('tests venues fetch', function() {
    return SeatGeekClient.getVenues({cityName: 'Boston'})
                 .then(response => expect(response.venues.length).to.equal(100))
                 .done();
  });

  it('tests clients fetch', function() {
    return SeatGeekClient.getEvents()
                 .then(response => console.log(response))
                 .done();
  })
});
