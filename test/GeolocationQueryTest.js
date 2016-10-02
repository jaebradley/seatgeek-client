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
    let trueGeolocationQuery = new GeolocationQuery(trueGeoIp, defaultLatitude, defaultLongitude, defaultRange, defaultUnit);
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

    let falseGeoLocationQuery = new GeolocationQuery(false, defaultLatitude, defaultLongitude, defaultRange, defaultUnit);
    expect(falseGeoLocationQuery.useIpAddress).to.equal(undefined);
  });

  it('tests exceptional behavior', function() {
    expect(() => new GeolocationQuery(1, defaultLatitude, defaultLongitude, defaultRange, defaultUnit))
      .to.throw(Error);

    expect(() => new GeolocationQuery(true, undefined, defaultLongitude, defaultRange, defaultUnit))
      .to.throw(Error);

    expect(() => new GeolocationQuery(true, defaultLatitude, undefined, defaultRange, defaultUnit))
      .to.throw(Error);

    expect(() => new GeolocationQuery(true, defaultLatitude, defaultLongitude, "foo", defaultUnit))
      .to.throw(Error);

    expect(() => new GeolocationQuery(true, defaultLatitude, defaultLongitude, defaultRange, "bar"))
      .to.throw(Error);
  });
});
