'use es6';

import {List, Map} from 'immutable';

import Filter from './Filter';

export default class FiltersParametersBuilder {
  static build(filters) {
    if (!(filters instanceof List)) {
      throw new TypeError('expected a List');
    }

    let parameters = Map();
    filters.forEach(function(filter) {
      if (!(filter instanceof Filter)) {
        throw new TypeError('expected a Filter');
      }

      if (typeof filter.value !== filter.option.type) {
        throw new TypeError('value is the wrong type');
      }

      parameters = parameters.set(FiltersParametersBuilder.buildParameterName(filter),
                                  filter.value);

    });
    return parameters;
  }

  static buildParameterName(filter) {
    if (!(filter instanceof Filter)) {
      throw new TypeError('expected a Filter');
    }

    return `${filter.option.value}.${filter.operator.value}`;
  }
}
