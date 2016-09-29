'use es6';

import {expect} from 'chai';

import QueryParameterBuilder from '../src/data/request/query/QueryParameterBuilder';
import Unit from '../src/data/Unit';

describe('Test Query Parameter Builder', function() {
  let defaultLatitude = 12.34;
  let defaultLongitude = 56.78;
  let defaultRange = 10;
  let defaultUnit = Unit.MILES;
  let defaultRangeString = String(defaultRange) + defaultUnit.value;

  it('tests expected behavior when geoIp set to true', function() {
    let trueGeoIp = true;
    let expectedTrueGeoIpParameters = {
      geoIp: trueGeoIp,
      lat: defaultLatitude,
      lon: defaultLongitude,
      range: defaultRangeString,
    };
    expect(QueryParameterBuilder.buildGeolocationParameters(trueGeoIp, defaultLatitude, defaultLongitude, defaultRange, defaultUnit)
      .to.eql(expectedTrueGeoIpParameters);
  });

  it('tests exceptional behavior', function() {
    expect(() => QueryParameterBuilder.buildGeolocationParameters(1, defaultLatitude, defaultLongitude, defaultRange, defaultUnit)
      .to.throw(Error);

    expect(() => QueryParameterBuilder.buildGeolocationParameters(true, undefined, defaultLongitude, defaultRange, defaultUnit)
      .to.throw(Error);

    expect(() => QueryParameterBuilder.buildGeolocationParameters(true, defaultLatitude, undefined, defaultRange, defaultUnit)
      .to.throw(Error);

    expect(() => QueryParameterBuilder.buildGeolocationParameters(true, defaultLatitude, defaultLongitude, "foo", defaultUnit)
      .to.throw(Error);

    expect(() => QueryParameterBuilder.buildGeolocationParameters(true, defaultLatitude, defaultLongitude, defaultRange, "bar")
      .to.throw(Error);
  });
});
