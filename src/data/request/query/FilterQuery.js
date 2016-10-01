'use es6';

import FilterOption from './FilterOption';
import FilterOperator from './FilterOperator';

export default class FilterQuery {
  constructor(option, operator, value) {
    if (!(option instanceof FilterOption)) {
      throw new Error('option must be a FilterOption');
    }

    if (!(operator instanceof FilterOperator)) {
      throw new Error('operator must be a FilterOperator');
    }

    if (!(value instanceof option.type)) {
      throw new Error('value is the wrong type');
    }

    super(option, operator, value);
  };

  buildQueryParameter() {
    return {
      this.buildQueryParameterName(): this.value,
    };
  },

  buildQueryParameterName() {
    return this.option.value + '.' + this.operator.value;
  }
};
