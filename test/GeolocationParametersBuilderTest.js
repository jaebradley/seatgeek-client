'use es6';

import {expect} from 'chai';

import Geolocation from '../src/query/events/Geolocation';
import GeolocationParametersBuilder from '../src/query/GeolocationParametersBuilder';
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
      geoip: useIpAddress,
      lat: latitude,
      lon: longitude,
      range: expectedRangeParameter,
    };
    expect(parameters.toJS()).to.eql(expectedParameters);
  });

  it('tests undefined useIpAddress', function() {
    let test = new Geolocation({
      useIpAddress: undefined,
      latitude: latitude,
      longitude: longitude,
      range: range,
      unit: unit,
    });
    let expectedParameters = {
      lat: latitude,
      lon: longitude,
      range: expectedRangeParameter,
    };
    let parameters = GeolocationParametersBuilder.build(test);
    expect(parameters.toJS()).to.eql(expectedParameters);
  });

  it('tests undefined latitude', function() {
    let test = new Geolocation({
      useIpAddress: useIpAddress,
      latitude: undefined,
      longitude: longitude,
      range: range,
      unit: unit,
    });
    let expectedParameters = {
      geoip: useIpAddress,
      lon: longitude,
      range: expectedRangeParameter,
    };
    let parameters = GeolocationParametersBuilder.build(test);
    expect(parameters.toJS()).to.eql(expectedParameters);
  });

  it('tests undefined longitude', function() {
    let test = new Geolocation({
      useIpAddress: useIpAddress,
      latitude: latitude,
      longitude: undefined,
      range: range,
      unit: unit,
    });
    let expectedParameters = {
      geoip: useIpAddress,
      lat: latitude,
      range: expectedRangeParameter,
    };
    let parameters = GeolocationParametersBuilder.build(test);
    expect(parameters.toJS()).to.eql(expectedParameters);
  });

  it('tests undefined range', function() {
    let test = new Geolocation({
      useIpAddress: useIpAddress,
      latitude: latitude,
      longitude: longitude,
      range: undefined,
      unit: unit,
    });
    let expectedParameters = {
      geoip: useIpAddress,
      lat: latitude,
      lon: longitude,
    };
    let parameters = GeolocationParametersBuilder.build(test);
    expect(parameters.toJS()).to.eql(expectedParameters);
  });

  it('tests undefined unit', function() {
    let test = new Geolocation({
      useIpAddress: useIpAddress,
      latitude: latitude,
      longitude: longitude,
      range: range,
      unit: undefined,
    });
    let expectedParameters = {
      geoip: useIpAddress,
      lat: latitude,
      lon: longitude,
    };
    let parameters = GeolocationParametersBuilder.build(test);
    expect(parameters.toJS()).to.eql(expectedParameters);
  });

  it('tests static parameter names', function() {
    expect(GeolocationParametersBuilder.getUseIpAddressParameterName()).to.equal('geoip');
    expect(GeolocationParametersBuilder.getLatitudeParameterName()).to.equal('lat');
    expect(GeolocationParametersBuilder.getLongitudeParameterName()).to.equal('lon');
    expect(GeolocationParametersBuilder.getRangeParameterName()).to.equal('range');
  });
});
