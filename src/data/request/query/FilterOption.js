'use es6';

import {Enum} from 'enumify';

export default class FilterOption extends Enum {}
FilterOption.initEnum({
  LISTING_COUNT: {
    value: 'listing_count',
    type: 'number',
  },
  AVERAGE_PRICE: {
    value: 'average_price',
    type: 'number',
  },
  LOWEST_PRICE: {
    value: 'lowest_price',
    type: 'number',
  },
  HIGEST_PRICE: {
    value: 'highest_price',
    type: 'number',
  },
  DATETIME_LOCAL: {
    value: 'datetime_local',
    type: 'string',
  },
  DATETIME_UTC: {
    value: 'datetime_utc',
    type: 'string',
  },
});
