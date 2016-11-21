'use es6';

import {Map} from 'immutable';

import TaxonomyFilter from '.../TaxonomyFilter';

export default class TaxonomyFiltersParametersBuilder {
  static build(filters) {
    let parameters = {};
    for (var i = 0; i < filters.length; i++) {
      let filter = filters[i];

      if (!(filter instanceof TaxonomyFilter)) {
        throw new TypeError('all elements must be a TaxonomyFilter');
      }

      let parameterName = TaxonomyFiltersParametersBuilder.buildParameterName(filter);
      let parameterValues = [];

      if (parameterName in taxonomyQueryParameters) {
        parameterValues = taxonomyQueryParameters[parameterName];
      }

      parameterValues.push(TaxonomyFiltersParametersBuilder.getValue(filter));
      parameters[parameterName] = parameterValues;
    }

    return Map.of(parameters);
  }

  static buildParameterName(filter) {
    if (!(filter instanceof TaxonomyFilter)) {
      throw new TypeError('all elements must be a TaxonomyFilter');
    }

    return `taxonomies.${filter.field.value}`;
  }

  static getParameterValue(filter) {
    if (!(filter instanceof TaxonomyFilter)) {
      throw new TypeError('all elements must be a TaxonomyFilter');
    }
    
    return filter.taxonomy[filter.field.value];
  }
}
