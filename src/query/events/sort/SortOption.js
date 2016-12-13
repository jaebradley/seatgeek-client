'use es6';

import {Enum} from 'enumify';

export default class SortOption extends Enum {}
SortOption.initEnum({
  DATETIME_UTC: {
    value: 'datetime_utc',
  },
  DATETIME_LOCAL: {
    value: 'datetime_local',
  },
  ANNOUNCE_DATE: {
    value: 'announce_date',
  },
  ID: {
    value: 'id',
  },
  SCORE: {
    value: 'score',
  },
  LOWEST_PRICE: {
    value: 'lowest_price',
  },
});
