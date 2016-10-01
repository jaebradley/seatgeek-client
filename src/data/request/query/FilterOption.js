'use es6';

import {Enum} from 'enumify';

export default class FilterOption extends Enum {}
FilterOption.initEnum({
  LISTING_COUNT: {
    value: 'listing_count',
  },
  AVERAGE_PRICE: {
    value: 'average_price',
  },
  LOWEST_PRICE: {
    value: 'lowest_price',
  },
  HIGEST_PRICE: {
    value: 'highest_price',
  },
});
