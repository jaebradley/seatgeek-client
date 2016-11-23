'use es6';

import {expect} from 'chai';

import Geolocation from '../src/data/request/query/Geolocation';
import GeolocationParametersBuilder from '../src/data/request/query/builders/GeolocationParametersBuilder';
import Unit from '../src/data/Unit';

describe('Test Geolocation Parameter Builder', function() {
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
    expect(parameters.toJS()).to.eql(expectedParameters);
  });

  it('tests static parameter names', function() {
    expect(GeolocationParametersBuilder.getUseIpAddressParameterName()).to.equal('geoIp');
    expect(GeolocationParametersBuilder.getLatitudeParameterName()).to.equal('lat');
    expect(GeolocationParametersBuilder.getLongitudeParameterName()).to.equal('long');
    expect(GeolocationParametersBuilder.getRangeParameterName()).to.equal('range');
  });
});
