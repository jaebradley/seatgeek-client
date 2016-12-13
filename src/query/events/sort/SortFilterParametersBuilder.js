'use es6';

import {Map} from 'immutable';

import SortFilter from './SortFilter';

export default class SortFilterParametersBuilder {
  static build(filter) {
    let parameters = Map();
    if ((typeof filter.option !== 'undefined') && (typeof filter.direction !== 'undefined')) {
      parameters = parameters.set(SortFilterParametersBuilder.getSortParameterName(),
                                  `${filter.option.value}.${filter.direction.value}`);
    }

    return parameters;
  }

  static getSortParameterName() {
    return 'sort';
  }
}
