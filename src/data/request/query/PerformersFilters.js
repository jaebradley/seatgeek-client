'use es6';

import {List, Record} from 'immutable';

let defaults = {
  ids: List(),
  filters: List(),
};

export default class PerformersFilters extends Record(defaults) {
};
