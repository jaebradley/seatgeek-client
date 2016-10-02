'use es6';

import {expect} from 'chai';

import VenueQuery from '../src/data/request/query/VenueQuery';

describe('Test Venue Query', function() {
  let defaultCityName = 'Boston';
  let defaultStateCode = 'MA';
  let defaultCountryCode = 'US';
  let defaultPostalCode = '02143';

  it('tests city name query parameter building', function() {
    let cityNameQueryExpectedParameters = {
      city: defaultCityName,
      state: defaultStateCode,
      country: defaultCountryCode,
      postal_code: defaultPostalCode,
    };
    let venueQuery = new VenueQuery(defaultCityName, defaultStateCode, defaultCountryCode, defaultPostalCode, defaultQueryString);
    expect(venueQuery.cityname).to.equal(defaultCityName);
    expect(venueQuery.stateCode).to.equal(defaultStateCode);
    expect(venueQuery.country).to.equal(defaultCountryCode);
    expect(venueQuery.postalCode).to.equal(defaultPostalCode);
    expect(venueQuery.buildQueryParameters()).to.eql(cityNameQueryExpectedParameters);
  });

  it('tests exceptional cityName cases', function() {
    expect(() => new VenueQuery(undefined, defaultStateCode, defaultCountryCode, defaultPostalCode)).to.throw(Error);
    expect(() => new VenueQuery(1, defaultStateCode, defaultCountryCode, defaultPostalCode)).to.throw(Error);
  });

  it('tests exceptional stateCode cases', function() {
    expect(() => new VenueQuery(defaultCityName, undefined, defaultCountryCode, defaultPostalCode)).to.throw(Error);
    expect(() => new VenueQuery(defaultCityName, 2, defaultCountryCode, defaultPostalCode)).to.throw(Error);
    expect(() => new VenueQuery(defaultCityName, 'MASS', defaultCountryCode, defaultPostalCode)).to.throw(Error);
  });

  it('tests exceptional countryCode cases', function() {
    expect(() => new VenueQuery(defaultCityName, defaultStateCode, undefined, defaultPostalCode)).to.throw(Error);
    expect(() => new VenueQuery(defaultCityName, defaultStateCode, 1, defaultPostalCode)).to.throw(Error);
    expect(() => new VenueQuery(defaultCityName, defaultStateCode, 'USA', defaultPostalCode)).to.throw(Error);
  });

  it('tests exceptional postalCode cases', function() {
    expect(() => new VenueQuery(defaultCityName, defaultStateCode, defaultCountryCode, undefined)).to.throw(Error);
    expect(() => new VenueQuery(defaultCityName, defaultStateCode, defaultCountryCode, 1234)).to.throw(Error);
  });
});
