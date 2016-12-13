'use es6';

import {Enum} from 'enumify';

export default class DatetimeType extends Enum {};

DatetimeType.initEnum({
  UTC: {
    value: 'utc',
  },
  LOCAL: {
    value: 'local',
  },
});
