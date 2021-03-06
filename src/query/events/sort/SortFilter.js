'use es6';

import {Record} from 'immutable';

import SortOption from './SortOption';
import SortDirection from './SortDirection';

let defaults = {
  option: SortOption.SCORE,
  direction: SortDirection.DESCENDING,
};

export default class SortFilter extends Record(defaults) {
};
