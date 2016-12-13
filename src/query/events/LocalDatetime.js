'use es6';

import {Record} from 'immutable';

import DatetimeType from './DatetimeType';
import Datetime from './Datetime';

export default class LocalDatetime extends Datetime {
  constructor(year, month, day, hour, minute, second) {
    super(year, month, day, hour, minute, second, DatetimeType.LOCAL);
  }
};
