'use es6';

import {expect} from 'chai';

import Geolocation from '../src/data/request/query/Geolocation';
import Unit from '../src/data/Unit';

describe('Test Geolocation', function() {
  let defaultLatitude = 12.34;
  let defaultLongitude = 56.78;
  let defaultRange = 10;
  let defaultUnit = Unit.MILE;

  it('tests expected behavior', function() {
    let trueGeoIp = true;
    let trueGeolocation = new Geolocation({
      useIpAddress: trueGeoIp,
      latitude: defaultLatitude,
      longitude: defaultLongitude,
      range: defaultRange,
      unit: defaultUnit
    });
    expect(trueGeolocation.useIpAddress).to.equal(trueGeoIp);
    expect(trueGeolocation.latitude).to.equal(defaultLatitude);
    expect(trueGeolocation.longitude).to.equal(defaultLongitude);
    expect(trueGeolocation.range).to.equal(defaultRange);
    expect(trueGeolocation.unit).to.equal(defaultUnit);
  });
});
