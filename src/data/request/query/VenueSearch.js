'use es6';

import {Record} from 'immutable';

import Constants from '../../Constants';
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
  perPage: Constants.getDefaultPerPage(),
  page: Constants.getDefaultPage(),
};

export default class VenueSearch extends Record(defaults) {
};
