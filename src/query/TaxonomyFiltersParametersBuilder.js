'use es6';

import {Map, List} from 'immutable';

import TaxonomyFilter from './TaxonomyFilter';
import TaxonomyField from './TaxonomyField';

export default class TaxonomyFiltersParametersBuilder {
  static build(filters) {
    if (!(filters instanceof List)) {
      throw new TypeError('expected filters to be a List');
    }

    let parameters = new Map();
    filters.forEach(function(filter) {
      if (!(filter instanceof TaxonomyFilter)) {
        throw new TypeError('expected filter to be a TaxonomyFilter');
      }

      let parameterValue = TaxonomyFiltersParametersBuilder.getParameterValue(filter);
      let parameterName = TaxonomyFiltersParametersBuilder.getParameterName(filter);
      let parameterValues = parameters.has(parameterName) ? parameters.get(parameterName) : new List();
      parameterValues = parameterValues.push(parameterValue);
      parameters = parameters.set(parameterName, parameterValues);
    });

    return parameters;
  }

  static getParameterName(filter) {
    if (!(filter instanceof TaxonomyFilter)) {
      throw new TypeError('expected filter to be a TaxonomyFilter');
    }

    return `taxonomies.${filter.field.value}`;
  }

  static getParameterValue(filter) {
    if (!(filter instanceof TaxonomyFilter)) {
      throw new TypeError('expected filter to be a TaxonomyFilter');
    }

    return filter.taxonomy[filter.field.parameterName];
  }

}
