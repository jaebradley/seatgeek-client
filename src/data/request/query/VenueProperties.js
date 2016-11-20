'use es6';

import {Record} from 'immutable';

let defaults = {
  cityName: undefined,
  stateCode: undefined,
  countryCode: undefined,
  postalCode: undefined,
};

export default class VenueProperties extends Record(defaults) {
}
