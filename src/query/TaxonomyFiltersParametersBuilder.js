'use es6';

import {Map, List} from 'immutable';

import TaxonomyFilter from './TaxonomyFilter';
import TaxonomyField from './TaxonomyField';

export default class TaxonomyFiltersParametersBuilder {
  static build(filters) {
    let parameters = new Map();
    filters.forEach(function(filter) {
      let parameterValue = TaxonomyFiltersParametersBuilder.getParameterValue(filter);
      let parameterName = TaxonomyFiltersParametersBuilder.getParameterName(filter);
      let parameterValues = parameters.has(parameterName) ? parameters.get(parameterName) : new List();
      parameterValues = parameterValues.push(parameterValue);
      parameters = parameters.set(parameterName, parameterValues);
    });

    return parameters;
  }

  static getParameterName(filter) {
    return `taxonomies.${filter.field.value}`;
  }

  static getParameterValue(filter) {
    return filter.taxonomy[filter.field.parameterName];
  }

}
