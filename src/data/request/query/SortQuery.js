'use es6';

import SortOption from './SortOption';
import SortDirection from './SortDirection';

let SORT_PARAMETER_NAME = 'sort';

export default class SortQuery {
  constructor(option, direction) {
    if (!(option instanceof SortOption)) {
      throw new Error('option must be a SortOption');
    }

    if (!(direction instanceof SortDirection)) {
      throw new Error('direction must be a SortDirection');
    }

    this.option = option;
    this.direction = direction;
  }

  buildQueryParameter() {
    return {
      SORT_PARAMETER_NAME: this.option.value + '.' + this.direction.value,
    };
  }
};
