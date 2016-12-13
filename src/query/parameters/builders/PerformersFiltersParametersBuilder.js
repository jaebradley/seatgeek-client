'use es6';

import {List, Map} from 'immutable';

import PerformerSpecificity from '../PerformerSpecificity';
import PerformerField from '../PerformerField';

export default class PerformersFiltersParametersBuilder {
  static build(filters) {
    let parameters = Map();
    filters.forEach(function(filter) {
      PerformersFiltersParametersBuilder.isValidFilter(filter);
      if (typeof filter.value !== 'undefined') {
        let parameterName =PerformersFiltersParametersBuilder.buildParameterName(filter);
        let parameterValues = parameters.has(parameterName) ? parameters.get(parameterName) : new List();
        parameterValues = parameterValues.push(filter.value);
        parameters = parameters.set(parameterName, parameterValues);
      }
    });

    return parameters;
  }

  static buildParameterName(filter) {
    PerformersFiltersParametersBuilder.isValidFilter(filter);
    return `performers[${filter.specificity.value}].${filter.field.value}`;
  }

  static isValidFilter(filter) {
    if ((typeof filter === 'undefined')
         || (!(filter.specificity instanceof PerformerSpecificity))
         || (!(filter.field instanceof PerformerField))) {
      throw new TypeError('invalid filter');
    }
  }
}