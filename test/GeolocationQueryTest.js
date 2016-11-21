'use es6';

import {expect} from 'chai';

import GeolocationQuery from '../src/data/request/query/GeolocationQuery';
import Unit from '../src/data/Unit';

describe('Test GeolocationQuery', function() {
  let defaultLatitude = 12.34;
  let defaultLongitude = 56.78;
  let defaultRange = 10;
  let defaultUnit = Unit.MILE;
  let defaultRangeString = String(defaultRange) + defaultUnit.value;

  it('tests expected behavior', function() {
    let trueGeoIp = true;
    let trueGeolocationQuery = new GeolocationQuery({
      useIpAddress: trueGeoIp,
      latitude: defaultLatitude,
      longitude: defaultLongitude,
      range: defaultRange,
      unit: defaultUnit
    });
    let expectedTrueGeoIpParameters = {
      geoIp: trueGeoIp,
      lat: defaultLatitude,
      lon: defaultLongitude,
      range: defaultRangeString,
    };
    expect(trueGeolocationQuery.useIpAddress).to.equal(trueGeoIp);
    expect(trueGeolocationQuery.latitude).to.equal(defaultLatitude);
    expect(trueGeolocationQuery.longitude).to.equal(defaultLongitude);
    expect(trueGeolocationQuery.range).to.equal(defaultRange);
    expect(trueGeolocationQuery.unit).to.equal(defaultUnit);
    expect(trueGeolocationQuery.buildQueryParameters()).to.eql(expectedTrueGeoIpParameters);
  });
});
