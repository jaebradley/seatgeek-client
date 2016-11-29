'use es6';

import {Map, List} from 'immutable';

import TaxonomyFilter from '../TaxonomyFilter';
import TaxonomyField from '../../../TaxonomyField';

export default class TaxonomyFiltersParametersBuilder {
  static build(filters) {
    let parameters = new Map();
    filters.forEach(function(filter) {
      let parameterName = TaxonomyFiltersParametersBuilder.getParameterName(filter);
      let parameterValues = parameters.has(parameterName) ? parameters.get(parameterName) : new List();
      parameterValues = parameterValues.push(TaxonomyFiltersParametersBuilder.getParameterValue(filter));
      parameters = parameters.set(parameterName, parameterValues);
    });

    return parameters;
  }

  static getParameterName(filter) {
    return `taxonomies.${filter.field.value}`;
  }

  static getParameterValue(filter) {
    return filter.taxonomy[TaxonomyFiltersParametersBuilder.getTaxonomyDataField(filter.field)];
  }

  static getTaxonomyDataField(filter) {
    switch (filter) {
      case TaxonomyField.ID:
        return 'id';

      case TaxonomyField.NAME:
        return 'slug';

      case TaxonomyField.PARENT_ID:
        return 'parent_id';

      default:
        throw new ReferenceError('unknown taxonomy field');
    }
  }
}
