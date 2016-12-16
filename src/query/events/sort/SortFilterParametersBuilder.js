'use es6';

import {Map} from 'immutable';

import SortFilter from './SortFilter';

export default class SortFilterParametersBuilder {
  static build(filter) {
    if (!(filter instanceof SortFilter)) {
      throw new TypeError('expected a sort filter');
    }

    return Map({ sort: SortFilterParametersBuilder.buildSortParameterValue(filter) });
  }

  static buildSortParameterValue(filter) {
    if (!(filter instanceof SortFilter)) {
      throw new TypeError('expected a sort filter');
    }

    return `${filter.option.value}.${filter.direction.value}`;
  }
}
