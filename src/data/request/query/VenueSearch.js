'use es6';

import {List, Record} from 'immutable';

import Constants from '../../Constants';
import Unit from '../../Unit';

let defaults = {
  ids: List(),
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
