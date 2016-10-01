'use es6';

import {Record} from 'immutable';

import DatetimeType from './DatetimeType';

export default class Datetime {
  constructor(year, month, day, hour, minute, second, type) {
    if (!(year instanceof Number)) {
      throw new Error('year must be a Number');
    }

    if (!(month instanceof Number)) {
      throw new Error('month must be a Number');
    }

    if (!(day instanceof Number)) {
      throw new Error('day must be a Number');
    }

    if (!(hour instanceof Number)) {
      throw new Error('hour must be a Number');
    }

    if (!(minute instanceof Number)) {
      throw new Error('minute must be a Number');
    }

    if (!(type instanceof DatetimeType)) {
      throw new Error('type must be a DatetimeType');
    }

    if (year < 1) {
      throw new Error('year must be a positive integer');
    }

    if (month < 1 || month > 12) {
      throw new Error('month must be an integer between 1 and 12, inclusive');
    }

    if (day < 1 || day > 30) {
      throw new Error('day must be an integer between 1 and 30, inclusive');
    }

    if (hour < 0 || hour > 23) {
      throw new Error('hour must be a non-negative integer less than 24');
    }

    if (minute < 0 || minute > 59) {
      throw new Error('minute must be a non-negative integer less than 60');
    }

    if (second < 0 || second > 59) {
      throw new Error('second must be a non-negative integer less than 60');
    }
  }
}
