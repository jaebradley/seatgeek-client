'use es6';

import {expect} from 'chai';

import Geolocation from '../src/query/events/Geolocation';
import Unit from '../src/data/Unit';

describe('Test Geolocation', function() {
  let defaultLatitude = 12.34;
  let defaultLongitude = 56.78;
  let defaultRange = 10;
  let defaultUnit = Unit.MILE;

  it('tests expected behavior', function() {
    let truegeoip = true;
    let trueGeolocation = new Geolocation({
      useIpAddress: truegeoip,
      latitude: defaultLatitude,
      longitude: defaultLongitude,
      range: defaultRange,
      unit: defaultUnit
    });
    expect(trueGeolocation.useIpAddress).to.equal(truegeoip);
    expect(trueGeolocation.latitude).to.equal(defaultLatitude);
    expect(trueGeolocation.longitude).to.equal(defaultLongitude);
    expect(trueGeolocation.range).to.equal(defaultRange);
    expect(trueGeolocation.unit).to.equal(defaultUnit);
  });
});
