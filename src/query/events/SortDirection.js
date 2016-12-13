'use es6';

import {Enum} from 'enumify';

export default class SortDirection extends Enum {};
SortDirection.initEnum({
  ASCENDING: {
    value: 'asc',
  },
  DESCENDING: {
    value: 'desc',
  },
});
