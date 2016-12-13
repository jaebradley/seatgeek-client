'use es6';

import FilterOption from './FilterOption';
import Operator from './Operator';

export default class FilterQuery {
  constructor(option, operator, value) {
    if (!(option instanceof FilterOption)) {
      throw new Error('option must be a FilterOption');
    }

    if (!(operator instanceof Operator)) {
      throw new Error('operator must be a Operator');
    }

    if (typeof value !== option.type) {
      throw new Error('value is the wrong type');
    }

    this.option = option;
    this.operator = operator;
    this.value = value;
  }

  buildQueryParameterName() {
    return this.option.value + '.' + this.operator.value;
  }

  buildQueryParameters() {
    return {
      [this.buildQueryParameterName()]: this.value,
    };
  }

  static buildFilterQueriesParameters(filterQueries) {
    if (!(filterQueries instanceof Array)) {
      throw new Error('filter queries must be an Array');
    }

    let parameters = {};
    for (var i = 0; i < filterQueries.length; i++) {
      let filterQuery = filterQueries[i];
      if (!(filterQuery instanceof FilterQuery)) {
        throw new Error('filter query is not an instance of a FilterQuery');
      }
      parameters[filterQuery.buildQueryParameterName()] = filterQuery.value;
    }
    return parameters;
  }
}
