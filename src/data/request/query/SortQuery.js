'use es6';

import SortOption from './SortOption';
import SortDirection from './SortDirection';

export default class SortQuery {
  constructor(option, direction) {
    if (!(option instanceof SortOption)) {
      throw new Error('option must be a SortOption');
    }

    if (!(direction instanceof SortDirection)) {
      throw new Error('direction must be a SortDirection');
    }
  }

  buildQueryParameter() {
    return {
      'sort': this.option.value + '.' + this.direction.value,
    };
  }
};
