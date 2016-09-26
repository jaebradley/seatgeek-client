'use es6';

import {expect} from 'chai';

import VenueQuery from '../src/data/request/query/VenueQuery';

describe('Test Venue Query', function() {
  let defaultQuery = new VenueQuery();
  it('tests venue query default instantiation', function() {
    expect(defaultQuery.cityName).to.be.an('undefined');
    expect(defaultQuery.stateCode).to.be.an('undefined');
    expect(defaultQuery.countryCode).to.be.an('undefined');
    expect(defaultQuery.postalCode).to.be.an('undefined');
    expect(defaultQuery.queryString).to.be.an('undefined');
  });

  it('tests query parameter building', function() {
    let defaultExpectedQueryParameters = {
      city: undefined,
      state: undefined,
      country: undefined,
      postal_code: undefined,
      q: undefined,
    };
    expect(defaultQuery.buildQueryParameters()).to.eql(defaultExpectedQueryParameters);

    let cityNameQuery = new VenueQuery({

    });
  });
});
