'use es6';

import {Enum} from 'enumify';

import Datetime from './Datetime';
import Date from './Date';

export default class FilterOption extends Enum {}
FilterOption.initEnum({
  LISTING_COUNT: {
    value: 'listing_count',
    type: Number,
  },
  AVERAGE_PRICE: {
    value: 'average_price',
    type: Number,
  },
  LOWEST_PRICE: {
    value: 'lowest_price',
    type: Number,
  },
  HIGEST_PRICE: {
    value: 'highest_price',
    type: Number,
  },
  DATETIME_LOCAL: {
    value: 'datetime_local',
    type: LocalDatetime,
  },
  DATETIME_UTC: {
    value: 'datetime_utc',
    type: UtcDatetime,
  },
});
