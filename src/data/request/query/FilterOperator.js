'use es6';

import {Enum} from 'enumify';

export default class FilterOperator extends Enum {};
FilterOperator.initEnum({
  GREATER_THAN: {
    value: 'gt',
  },
  GREATER_THAN_OR_EQUAL_TO: {
    value: 'gte',
  },
  LESS_THAN: {
    value: 'lt',
  },
  LESS_THAN_OR_EQUAL_TO: {
    value: 'lte',
  },
})
