'use es6';

import {List, Record} from 'immutable';

let defaults = {
  ids: List(),
  properties: new VenueProperties(),
};

export default class VenuesFilter extends Record(defaults) {
};
