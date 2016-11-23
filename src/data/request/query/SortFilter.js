'use es6';

import {Record} from 'immutable';

import SortOption from './SortOption';
import SortDirection from './SortDirection';

let defaults = {
  option: SortOption.SCORE,
  direction: SortDirection.DESC,
};

export default class SortFilter extends Record(defaults) {
  buildQueryParameters() {
    return {
      'sort': this.option.value + '.' + this.direction.value,
    };
  }
};
