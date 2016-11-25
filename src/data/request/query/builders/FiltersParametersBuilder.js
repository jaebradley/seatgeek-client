'use es6';

import {Map} from 'immutable';

import Filter from '../Filter';

export default class FiltersParametersBuilder {
  static build(filters) {
    let parameters = Map();
    filters.forEach(function(filter) {
      FiltersParametersBuilder.isDefinedFilter(filter);

      if (typeof filter.value !== filter.option.type) {
        throw new TypeError('value is the wrong type');
      }

      parameters = parameters.set(FiltersParametersBuilder.buildParameterName(filter),
                                  filter.value);

    });
    return parameters;
  }

  static buildParameterName(filter) {
    FiltersParametersBuilder.isDefinedFilter(filter);

    return `${filter.option.value}.${filter.operator.value}`;
  }

  static isDefinedFilter(filter) {
    if ((typeof filter.option === 'undefined')
         || (typeof filter.operator === 'undefined')) {
      throw new ReferenceError('filter option or operator are not defined');
    }
  }
}
