'use es6';

import {expect} from 'chai';

import BaseVenueLocationQuery from '../src/data/request/query/BaseVenueLocationQuery';

describe('Test Venue Query', function() {
  let defaultCityName = 'Boston';
  let defaultStateCode = 'MA';
  let defaultCountryCode = 'US';
  let defaultPostalCode = '02143';

  it('tests city name query parameter building', function() {
    let venueQuery = new BaseVenueLocationQuery(defaultCityName, defaultStateCode, defaultCountryCode, defaultPostalCode);
    expect(venueQuery.cityName).to.equal(defaultCityName);
    expect(venueQuery.stateCode).to.equal(defaultStateCode);
    expect(venueQuery.countryCode).to.equal(defaultCountryCode);
    expect(venueQuery.postalCode).to.equal(defaultPostalCode);
  });

  it('tests exceptional cityName cases', function() {
    expect(() => new BaseVenueLocationQuery(1, defaultStateCode, defaultCountryCode, defaultPostalCode)).to.throw(Error);
  });

  it('tests exceptional stateCode cases', function() {
    expect(() => new BaseVenueLocationQuery(defaultCityName, 2, defaultCountryCode, defaultPostalCode)).to.throw(Error);
    expect(() => new BaseVenueLocationQuery(defaultCityName, 'MASS', defaultCountryCode, defaultPostalCode)).to.throw(Error);
  });

  it('tests exceptional countryCode cases', function() {
    expect(() => new BaseVenueLocationQuery(defaultCityName, defaultStateCode, 1, defaultPostalCode)).to.throw(Error);
    expect(() => new BaseVenueLocationQuery(defaultCityName, defaultStateCode, 'USA', defaultPostalCode)).to.throw(Error);
  });

  it('tests exceptional postalCode cases', function() {
    expect(() => new BaseVenueLocationQuery(defaultCityName, defaultStateCode, defaultCountryCode, 1234)).to.throw(Error);
  });
});
