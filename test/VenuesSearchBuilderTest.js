'use es6';

import chai from 'chai';
import chaiImmutable from 'chai-immutable';
chai.use(chaiImmutable);

import {List} from 'immutable';

import Geolocation from '../src/query/Geolocation'
import Pagination from '../src/query/Pagination';
import Unit from '../src/data/Unit';
import VenuesProperties from '../src/query/VenuesProperties';
import VenuesSearch from '../src/query/venues/VenuesSearch';

import VenuesSearchBuilder from '../src/query/venues/VenuesSearchBuilder';

describe('Test Venue Search Builder', function() {
  it('tests search building', function() {
    let id1 = 1;
    let id2 = 2;
    let id3 = 3;
    let ids = [id1, id2, id3];
    let cityName = 'Boston';
    let stateCode = 'MA';
    let countryCode = 'USA';
    let postalCode = '1234';
    let queryString = 'jaebaebae';
    let useIpAddress = false;
    let latitude = 1.234;
    let longitude = 5.678;
    let range = 9;
    let unit = Unit.MILE;
    let page = 10;
    let perPage = 11;
    let VenuesSearchJson = {
      ids: ids,
      cityName: cityName,
      stateCode: stateCode,
      countryCode: countryCode,
      postalCode: postalCode,
      queryString: queryString,
      useIpAddress: useIpAddress,
      latitude: latitude,
      longitude: longitude,
      range: range,
      unit: unit,
      perPage: perPage,
      page: page,
    };
    let expected = new VenuesSearch({
      properties: new VenuesProperties({
        ids: List.of(id1, id2, id3),
        cityName: cityName,
        stateCode: stateCode,
        countryCode: countryCode,
        postalCode: postalCode,
      }),
      queryString: queryString,
      geolocation: new Geolocation({
        useIpAddress: useIpAddress,
        latitude: latitude,
        longitude: longitude,
        range: range,
        unit: unit,
      }),
      pagination: new Pagination({
        perPage: perPage,
        page: page,
      })
    });
    let createdVenuesSearch = VenuesSearchBuilder.build(VenuesSearchJson);
    chai.expect(createdVenuesSearch).to.eql(expected);
  });
});
