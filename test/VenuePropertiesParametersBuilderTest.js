'use es6';

import {expect} from 'chai';

import VenuesProperties from '../src/query/VenuesProperties';
import VenuesPropertiesParametersBuilder from '../src/query/VenuesPropertiesParametersBuilder';

describe('Tests Venue Properties Parameters Builder', function() {
  let cityName = 'Boston';
  let stateCode = 'MA';
  let countryCode = 'USA';
  let postalCode = '02112';

  it('tests expected behavior', function() {
    let properties = new VenuesProperties({
      cityName: cityName,
      stateCode: stateCode,
      countryCode: countryCode,
      postalCode: postalCode,
    });
    let expectedParameters = {
      city: cityName,
      state: stateCode,
      country: countryCode,
      postal_code: postalCode,
    };
    let parameters = VenuesPropertiesParametersBuilder.build(properties);
    expect(parameters.toJS()).to.eql(expectedParameters);
  });

  it('tests undefined cityName', function() {
    let properties = new VenuesProperties({
      cityName: undefined,
      stateCode: stateCode,
      countryCode: countryCode,
      postalCode: postalCode,
    });
    let expectedParameters = {
      state: stateCode,
      country: countryCode,
      postal_code: postalCode,
    };
    let parameters = VenuesPropertiesParametersBuilder.build(properties);
    expect(parameters.toJS()).to.eql(expectedParameters);
  });

  it('tests undefined stateCode', function() {
    let properties = new VenuesProperties({
      cityName: cityName,
      stateCode: undefined,
      countryCode: countryCode,
      postalCode: postalCode,
    });
    let expectedParameters = {
      city: cityName,
      country: countryCode,
      postal_code: postalCode,
    };
    let parameters = VenuesPropertiesParametersBuilder.build(properties);
    expect(parameters.toJS()).to.eql(expectedParameters);
  });

  it('tests undefined countryCode', function() {
    let properties = new VenuesProperties({
      cityName: cityName,
      stateCode: stateCode,
      countryCode: undefined,
      postalCode: postalCode,
    });
    let expectedParameters = {
      city: cityName,
      state: stateCode,
      postal_code: postalCode,
    };
    let parameters = VenuesPropertiesParametersBuilder.build(properties);
    expect(parameters.toJS()).to.eql(expectedParameters);
  });

  it('tests undefined postalCode', function() {
    let properties = new VenuesProperties({
      cityName: cityName,
      stateCode: stateCode,
      countryCode: countryCode,
      postalCode: undefined,
    });
    let expectedParameters = {
      city: cityName,
      state: stateCode,
      country: countryCode,
    };
    let parameters = VenuesPropertiesParametersBuilder.build(properties);
    expect(parameters.toJS()).to.eql(expectedParameters);
  });
});
