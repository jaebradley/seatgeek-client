'use es6';

import {expect} from 'chai';

import {List} from 'immutable';

import Geolocation from '../src/query/Geolocation';
import Unit from '../src/data/Unit';
import Pagination from '../src/query/Pagination';
import VenuesProperties from '../src/query/VenuesProperties';
import VenuesSearch from '../src/query/venues/VenuesSearch';
import VenuesSearchParametersBuilder from '../src/query/venues/VenuesSearchParametersBuilder';

describe('Tests Venue Search Parameters Builder', function() {
  let id1 = 1;
  let id2 = 2;
  let id3 = 3;
  let ids = List.of(id1, id2, id3);
  let cityName = 'Boston';
  let stateCode = 'MA';
  let countryCode = 'US';
  let postalCode = '02122';
  let queryString = 'jaebaebae';
  let useIpAddress = true;
  let latitude = 4;
  let longitude = 5;
  let range = 6;
  let unit = Unit.MILE;
  let perPage = 7;
  let page = 8;
  let search = new VenuesSearch({
    properties: new VenuesProperties({
      ids: ids,
      cityName: cityName,
      stateCode: stateCode,
      countryCode: countryCode,
      postalCode: postalCode
    }),
    geolocation: new Geolocation({
      useIpAddress: useIpAddress,
      latitude: latitude,
      longitude: longitude,
      range: range,
      unit: unit
    }),
    pagination: new Pagination({
      perPage: perPage,
      page: page
    }),
    queryString: queryString
  });

  it('tests expected behavior for parameter building', function() {
    let parameters = VenuesSearchParametersBuilder.build(search);
    let expectedParameters = {
      id: [id1, id2, id3],
      city: cityName,
      state: stateCode,
      country: countryCode,
      postal_code: postalCode,
      q: queryString,
      geoip: true,
      lat: latitude,
      lon: longitude,
      range: '6mi',
      per_page: 7,
      page: 8,
    };
    expect(parameters.toJS()).to.eql(expectedParameters);
  });
});
