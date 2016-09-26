'use es6';

import {Enum} from 'enumify';

export default class Unit extends Enum {};

Unit.initEnum({
  MILES: {
    value: 'mi',
  },
  KILOMETERS: {
    value: 'km',
  },
});
