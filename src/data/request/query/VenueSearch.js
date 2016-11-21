'use es6';

import {Record} from 'immutable';

import Unit from '../../Unit';

let defaults = {
  ids: [],
  cityName: undefined,
  stateCode: undefined,
  countryCode: undefined,
  postalCode: undefined,
  queryString: undefined,
  useIpAddress: true,
  latitude: undefined,
  longitude: undefined,
  range: 10,
  unit: Unit.MILE,
  perPage: 100,
  page: 1,
};

export default class VenueSearch extends Record(defaults) {
};
