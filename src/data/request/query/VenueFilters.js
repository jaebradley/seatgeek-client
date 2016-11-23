'use es6';

import {List, Record} from 'immutable';

let defaults = {
  ids: List(),
  properties: new VenueProperties(),
};

export default class VenueFilters extends Record(defaults) {
};
