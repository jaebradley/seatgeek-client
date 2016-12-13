'use es6';

import {List, Record} from 'immutable';

let defaults = {
  ids: List(),
  cityName: undefined,
  stateCode: undefined,
  countryCode: undefined,
  postalCode: undefined,
};

export default class VenuesFilter extends Record(defaults) {
};
