'use es6';

import {Enum} from 'enumify';

export default class Unit extends Enum {};

Unit.initEnum({
  MILE: {
    value: 'mi',
  },
  KILOMETER: {
    value: 'km',
  },
});
