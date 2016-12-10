'use es6';

import {List, Record} from 'immutable';

import Constants from '../../Constants';

let defaults = {
  ids: List(),
  cityName: undefined,
  stateCode: undefined,
  countryCode: undefined,
  postalCode: undefined,
  queryString: undefined,
  useIpAddress: false,
  latitude: undefined,
  longitude: undefined,
  range: Constants.getDefaultRange(),
  unit: Constants.getDefaultUnit(),
  perPage: Constants.getDefaultPerPage(),
  page: Constants.getDefaultPage(),
};

export default class VenueSearch extends Record(defaults) {
};
