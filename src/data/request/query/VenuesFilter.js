'use es6';

import {List, Record} from 'immutable';

import VenueProperties from './VenueProperties';

let defaults = {
  ids: List(),
  properties: new VenueProperties(),
};

export default class VenuesFilter extends Record(defaults) {
};
