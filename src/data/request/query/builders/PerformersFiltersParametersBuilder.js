'use es6';

import {Map} from 'immutable';

import PerformerFilter from '../PerformerFilter';
import PerformerFilters from '../PerformerFilters';

export default class PerformersFiltersParametersBuilder {
  static build(filters) {
    if (!(filters instanceof PerformersFilters)) {
      throw new TypeError('must be a PerformersFilter instance');
    }

    let parameters = Map();
    filters.filters.forEach(function(filter) {
      if (!(filter instanceof PerformerFilter)) {
        throw new TypeError('must be a PerformerFilter instance');
      }
      parameters = parameters.set(PerformersFiltersParametersBuilder.buildParameterName(filter),
                                  filter.value);
    });

    return parameters;
  }

  static buildParameterName(filter) {
    if (!(filter instanceof PerformerFilter)) {
      throw new TypeError('must be a PerformerFilter instance');
    }

    return `performers[${filter.specificity.value}].${filter.field.value}`;
  }

  static getIdsParameterName() {
    return 'id';
  }
}
