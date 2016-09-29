'use es6';

import {expect} from 'chai';

import QueryParameterBuilder from '../src/data/request/query/QueryParameterBuilder';

describe('Test Query Parameter Builder', function() {
  it('tests default query parameter building', function() {
    let defaultExpectedQueryParameters = {
      city: undefined,
      state: undefined,
      country: undefined,
      postal_code: undefined,
      q: undefined,
    };
    expect(QueryParameterBuilder.buildPlaceParameters(undefined, undefined, undefined, undefined, undefined, undefined)).to.eql(defaultExpectedQueryParameters);
  });

  it('tests city name query parameter building', function() {
    let cityNameQuery = {
      cityName: 'Boston',
      stateCode: undefined,
      countryCode: undefined,
      postalCode: undefined,
      queryString: undefined,
    };
    let cityNameQueryExpectedParameters = {
      city: 'Boston',
      state: undefined,
      country: undefined,
      postal_code: undefined,
      q: undefined,
    };
    expect(QueryParameterBuilder.buildPlaceParameters(cityNameQuery)).to.eql(cityNameQueryExpectedParameters);

    let incorrectCityNameQuery = {
      cityName: 1,
      stateCode: undefined,
      countryCode: undefined,
      postalCode: undefined,
      queryString: undefined,
    };
    expect(() => QueryParameterBuilder.buildPlaceParameters(incorrectCityNameQuery)).to.throw();
  });

  it('tests state code query parameter building', function() {
    let stateCodeQuery = {
      cityName: undefined,
      stateCode: 'MA',
      countryCode: undefined,
      postalCode: undefined,
      queryString: undefined,
    };
    let stateCodeQueryExpectedParameters = {
      city: undefined,
      state: 'MA',
      country: undefined,
      postal_code: undefined,
      q: undefined,
    };
    expect(QueryParameterBuilder.buildPlaceParameters(stateCodeQuery)).to.eql(stateCodeQueryExpectedParameters);

    let incorrectStateCodeQuery = {
      cityName: undefined,
      stateCode: 1,
      countryCode: undefined,
      postalCode: undefined,
      queryString: undefined,
    };
    expect(() => QueryParameterBuilder.buildPlaceParameters()).to.throw(Error);

    let tooLongStateCodeQuery = {
      cityName: undefined,
      stateCode: 'MASSACHUSETTS',
      countryCode: undefined,
      postalCode: undefined,
      queryString: undefined,
    };
    expect(() => QueryParameterBuilder.buildPlaceParameters()).to.throw(Error);
  });

  it('tests country code query parameter building', function() {
    let countryCodeQuery = {
      cityName: undefined,
      stateCode: undefined,
      countryCode: 'US',
      postalCode: undefined,
      queryString: undefined,
    };
    let countryCodeQueryExpectedQueryParameters = {
      city: undefined,
      state: undefined,
      country: 'US',
      postal_code: undefined,
      q: undefined,
    };
    expect(QueryParameterBuilder.buildPlaceParameters()).to.eql(countryCodeQueryExpectedQueryParameters);

    let invalidTypeCountryCode = {
      cityName: undefined,
      stateCode: undefined,
      countryCode: 1234,
      postalCode: undefined,
      queryString: undefined,
    };
    expect(() => QueryParameterBuilder.buildPlaceParameters()).to.throw(Error);

    let tooLongCountryCode = {
      cityName: undefined,
      stateCode: undefined,
      countryCode: 'JAEBAEBAE',
      postalCode: undefined,
      queryString: undefined,
    };
    expect(() => QueryParameterBuilder.buildPlaceParameters()).to.throw(Error);
  });

  it('tests postal code query parameter building', function() {
    let validQuery = {
      cityName: undefined,
      stateCode: undefined,
      countryCode: undefined,
      postalCode: '12345',
      queryString: undefined,
    };
    let validQueryExpectedQueryParameters = {
      city: undefined,
      state: undefined,
      country: undefined,
      postal_code: '12345',
      q: undefined,
    };
    expect(QueryParameterBuilder.buildPlaceParameters()).to.eql(validQueryExpectedQueryParameters);

    let invalidTypeQuery = {
      cityName: undefined,
      stateCode: undefined,
      countryCode: undefined,
      postalCode: 12345,
      queryString: undefined,
    };
    expect(() => QueryParameterBuilder.buildPlaceParameters()).to.throw(Error);
  });

  it('tests query string query parameter building', function() {
    let validQuery = {
      cityName: undefined,
      stateCode: undefined,
      countryCode: undefined,
      postalCode: undefined,
      queryString: 'hi bae jadley',
    };
    let validQueryExpectedQueryParameters = {
      city: undefined,
      state: undefined,
      country: undefined,
      postal_code: undefined,
      q: 'hi bae jadley',
    };
    expect(QueryParameterBuilder.buildPlaceParameters()).to.eql(validQueryExpectedQueryParameters);

    let invalidTypeQuery = {
      cityName: undefined,
      stateCode: undefined,
      countryCode: undefined,
      postalCode: undefined,
      queryString: 1,
    };
    expect(() => QueryParameterBuilder.buildPlaceParameters()).to.throw(Error);
  });
});
