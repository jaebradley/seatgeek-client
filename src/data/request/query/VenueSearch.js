'use es6';

import {Record} from 'immutable';

import VenuePropertiesQuery from './VenuePropertiesQuery';
import GeolocationQuery from './GeolocationQuery';
import PageQuery from './PageQuery';
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

export default class VenueSearchQuery extends Record(defaults) {
};
