'use es6';

import {expect} from 'chai';

import Geolocation from '../src/data/request/query/Geolocation';
import GeolocationParametersBuilder from '../src/data/request/query/builders/GeolocationParametersBuilder';
import Unit from '../src/data/Unit';

describe('Test Geolocation Parameter building', function() {
  let latitude = 12.34;
  let longitude = 56.78;
  let range = 10;
  let unit = Unit.MILE;
  let useIpAddress = true;
  let expectedRangeParameter = '10mi';
  let geolocation = new Geolocation({
    useIpAddress: useIpAddress,
    latitude: latitude,
    longitude: longitude,
    range: range,
    unit: unit,
  });

  it('tests range parameter value building', function() {
    let rangeParameter = GeolocationParametersBuilder.buildRangeParameterValue(geolocation);
    expect(rangeParameter).to.equal(expectedRangeParameter);
  });

  it('tests geolocation parameter building', function() {
    let parameters = GeolocationParametersBuilder.build(geolocation);
    let expectedParameters = {
      geoIp: useIpAddress,
      lat: latitude,
      lon: longitude,
      range: expectedRangeParameter,
    };
    expect(parameters).to.eql(expectedParameters);
  });
});
