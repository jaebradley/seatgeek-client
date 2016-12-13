'use es6';

import {List, Map} from 'immutable';

import PerformerFilter from './PerformerFilter';

export default class PerformersFiltersParametersBuilder {
  static build(filters) {
    if (!(filters instanceof List)) {
      throw new TypeError('expected filters to be a List');
    }

    let parameters = Map();
    filters.forEach(function(filter) {
      if (!(filter instanceof PerformerFilter)) {
        throw new TypeError('filter must be a PerformerFilter');
      }

      if (typeof filter.value !== 'undefined') {
        let parameterName = PerformersFiltersParametersBuilder.buildParameterName(filter);
        let parameterValues = parameters.has(parameterName)
                                        ? parameters.get(parameterName)
                                        : new List();
        parameterValues = parameterValues.push(filter.value);
        parameters = parameters.set(parameterName, parameterValues);
      }
    });

    return parameters;
  }

  static buildParameterName(filter) {
    if (!(filter instanceof PerformerFilter)) {
      throw new TypeError('filter must be a PerformerFilter');
    }

    return `performers[${filter.specificity.value}].${filter.field.value}`;
  }
}
