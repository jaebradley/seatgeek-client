'use es6';

import {List, Record} from 'immutable';

let defaults = {
  ids: List(),
  cityName: undefined,
  stateCode: undefined,
  countryCode: undefined,
  postalCode: undefined,
  queryString: undefined
};

export default class VenuesProperties extends Record(defaults) {
}
