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

  it('tests default query parameter building', function() {
    let defaultExpectedQueryParameters = {
      city: undefined,
      state: undefined,
      country: undefined,
      postal_code: undefined,
      q: undefined,
    };
    expect(defaultQuery.buildQueryParameters()).to.eql(defaultExpectedQueryParameters);
  });

  it('tests city name query parameter building', function() {
    let cityNameQuery = new VenueQuery({
      cityName: 'Boston',
      stateCode: undefined,
      countryCode: undefined,
      postalCode: undefined,
      queryString: undefined,
    });
    let cityNameQueryExpectedParameters = {
      city: 'Boston',
      state: undefined,
      country: undefined,
      postal_code: undefined,
      q: undefined,
    };
    expect(cityNameQuery.buildQueryParameters()).to.eql(cityNameQueryExpectedParameters);

    let incorrectCityNameQuery = new VenueQuery({
      cityName: 1,
      stateCode: undefined,
      countryCode: undefined,
      postalCode: undefined,
      queryString: undefined,
    });
    expect(() => incorrectCityNameQuery.buildQueryParameters()).to.throw();
  });

  it('tests state code query parameter building', function() {
    let stateCodeQuery = new VenueQuery({
      cityName: undefined,
      stateCode: 'MA',
      countryCode: undefined,
      postalCode: undefined,
      queryString: undefined,
    });
    let stateCodeQueryExpectedParameters = {
      city: undefined,
      state: 'MA',
      country: undefined,
      postal_code: undefined,
      q: undefined,
    };
    expect(stateCodeQuery.buildQueryParameters()).to.eql(stateCodeQueryExpectedParameters);

    let incorrectStateCodeQuery = new VenueQuery({
      cityName: undefined,
      stateCode: 1,
      countryCode: undefined,
      postalCode: undefined,
      queryString: undefined,
    });
    expect(() => incorrectStateCodeQuery.buildQueryParameters()).to.throw(Error);

    let tooLongStateCodeQuery = new VenueQuery({
      cityName: undefined,
      stateCode: 'MASSACHUSETTS',
      countryCode: undefined,
      postalCode: undefined,
      queryString: undefined,
    });
    expect(() => tooLongStateCodeQuery.buildQueryParameters()).to.throw(Error);
  });

  it('tests country code query parameter building', function() {
    let countryCodeQuery = new VenueQuery({
      cityName: undefined,
      stateCode: undefined,
      countryCode: 'US',
      postalCode: undefined,
      queryString: undefined,
    });
    let countryCodeQueryExpectedQueryParameters = {
      city: undefined,
      state: undefined,
      country: 'US',
      postal_code: undefined,
      q: undefined,
    };
    expect(countryCodeQuery.buildQueryParameters()).to.eql(countryCodeQueryExpectedQueryParameters);

    let invalidTypeCountryCode = new VenueQuery({
      cityName: undefined,
      stateCode: undefined,
      countryCode: 1234,
      postalCode: undefined,
      queryString: undefined,
    });
    expect(() => invalidTypeCountryCode.buildQueryParameters()).to.throw(Error);

    let tooLongCountryCode = new VenueQuery({
      cityName: undefined,
      stateCode: undefined,
      countryCode: 'JAEBAEBAE',
      postalCode: undefined,
      queryString: undefined,
    });
    expect(() => tooLongCountryCode.buildQueryParameters()).to.throw(Error);
  });

  it('tests postal code query parameter building', function() {
    let validQuery = new VenueQuery({
      cityName: undefined,
      stateCode: undefined,
      countryCode: undefined,
      postalCode: '12345',
      queryString: undefined,
    });
    let validQueryExpectedQueryParameters = {
      city: undefined,
      state: undefined,
      country: undefined,
      postal_code: '12345',
      q: undefined,
    };
    expect(validQuery.buildQueryParameters()).to.eql(validQueryExpectedQueryParameters);

    let invalidTypeQuery = new VenueQuery({
      cityName: undefined,
      stateCode: undefined,
      countryCode: undefined,
      postalCode: 12345,
      queryString: undefined,
    });
    expect(() => invalidTypeQuery.buildQueryParameters()).to.throw(Error);
  });

  it('tests query string query parameter building', function() {
    let validQuery = new VenueQuery({
      cityName: undefined,
      stateCode: undefined,
      countryCode: undefined,
      postalCode: undefined,
      queryString: 'hi bae jadley',
    });
    let validQueryExpectedQueryParameters = {
      city: undefined,
      state: undefined,
      country: undefined,
      postal_code: undefined,
      q: 'hi bae jadley',
    };
    expect(validQuery.buildQueryParameters()).to.eql(validQueryExpectedQueryParameters);

    let invalidTypeQuery = new VenueQuery({
      cityName: undefined,
      stateCode: undefined,
      countryCode: undefined,
      postalCode: undefined,
      queryString: 1,
    });
    expect(() => invalidTypeQuery.buildQueryParameters()).to.throw(Error);
  });
});
