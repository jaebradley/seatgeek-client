import {expect} from 'chai';
import {Map} from 'immutable';

import BaseGeolocationQuery from '../src/data/request/query/BaseGeolocationQuery';
import Unit from '../src/data/Unit';

describe('Instantiate BaseGeolocation Query', function() {
  it('Tests default BaseGeolocation query', function() {
    const defaultQuery = new BaseGeolocationQuery();
    expect(defaultQuery.geoIp).to.equal(false);
    expect(defaultQuery.latitude).to.be.a('undefined');
    expect(defaultQuery.longitude).to.be.a('undefined');
    expect(defaultQuery.address).to.be.a('undefined');
    expect(defaultQuery.range).to.equal(10);
    expect(defaultQuery.unit).to.equal(Unit.MILES);
    expect(defaultQuery.per_page).to.equal(100);
    expect(defaultQuery.page).to.equal(1);
  });

  it('Tests specific base geolocation query', function() {
    let geoIp = true;
    let latitude = 1.234;
    let longitude = 5.6789;
    let address = "2 Canal Park, Cambridge, MA";
    let range = 100;
    let unit = Unit.KILOMETERS;
    let per_page = 1000;
    let page = 10000;
    let specificQuery = new BaseGeolocationQuery({
      geoIp: geoIp,
      latitude: latitude,
      longitude: longitude,
      address: address,
      range: range,
      unit: unit,
      per_page: per_page,
      page: page,
    });

    expect(specificQuery.geoIp).to.equal(geoIp);
    expect(specificQuery.latitude).to.equal(latitude);
    expect(specificQuery.longitude).to.equal(longitude);
    expect(specificQuery.address).to.equal(address);
    expect(specificQuery.range).to.equal(range);
    expect(specificQuery.unit).to.equal(unit);
    expect(specificQuery.per_page).to.equal(per_page);
    expect(specificQuery.page).to.equal(page);
  });
});
