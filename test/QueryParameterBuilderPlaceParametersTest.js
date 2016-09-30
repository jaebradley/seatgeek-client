'use es6';

import {expect} from 'chai';

import QueryParameterBuilder from '../src/data/request/query/QueryParameterBuilder';

describe('Test Query Parameter Builder', function() {
let defaultCityName = 'Boston';
let defaultStateCode = 'MA';
let defaultCountryCode = 'US';
let defaultPostalCode = '02143';
let defaultQueryString = '';

  it('tests city name query parameter building', function() {
    let cityNameQueryExpectedParameters = {
      city: defaultCityName,
      state: defaultStateCode,
      country: defaultCountryCode,
      postal_code: defaultPostalCode,
      q: defaultQueryString,
    };
    expect(QueryParameterBuilder.buildPlaceParameters(defaultCityName, defaultStateCode,
      defaultCountryCode, defaultPostalCode, defaultQueryString)).to.eql(cityNameQueryExpectedParameters);

    expect(() => QueryParameterBuilder.buildPlaceParameters(1, defaultStateCode,
      defaultCountryCode, defaultPostalCode, defaultQueryString)).to.throw(Error);
  });

  it('tests state code query parameter building', function() {
    expect(() => QueryParameterBuilder.buildPlaceParameters(defaultCityName, 2,
      defaultCountryCode, defaultPostalCode, defaultQueryString)).to.throw(Error);

    expect(() => QueryParameterBuilder.buildPlaceParameters(defaultCityName, 'MASS',
      defaultCountryCode, defaultPostalCode, defaultQueryString)).to.throw(Error);
  });

  it('tests country code query parameter building', function() {
    expect(() => QueryParameterBuilder.buildPlaceParameters(defaultCityName, defaultStateCode,
      1, defaultPostalCode, defaultQueryString)).to.throw(Error);

    expect(() => QueryParameterBuilder.buildPlaceParameters(defaultCityName, defaultStateCode,
      'USA', defaultPostalCode, defaultQueryString)).to.throw(Error);
  });

  it('tests postal code query parameter building', function() {
    expect(() => QueryParameterBuilder.buildPlaceParameters(defaultCityName, defaultStateCode,
      defaultCountryCode, defaultPostalCode, 1)).to.throw(Error);
  });
});
