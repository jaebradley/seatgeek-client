'use es6';

import {List} from 'immutable';

export default class Utilities {
  static buildIds(ids) {
    if (!Array.isArray(ids)) {
      throw new TypeError('ids must be an array');
    }

    let parsedIds = List();

    ids.forEach(function(id) {
      if (!Number.isInteger(id)) {
        throw new TypeError('invalid id type');
      }

      parsedIds = parsedIds.push(id);
    });

    return parsedIds;
  }

  static buildString(s) {
    if (typeof s !== 'string') {
      throw new TypeError('invalid string');
    }

    return s;
  }

  static buildInteger(value) {
    if (!Number.isInteger(value)) {
      throw new TypeError('must be a number');
    }

    return value;
  }

  static buildBoolean(value) {
    if (typeof value !== 'boolean') {
      throw new TypeError('must be a boolean');
    }

    return value;
  }

  static buildFloat(value) {
    if (typeof value !== 'float') {
      throw new TypeError('must be a boolean');
    }

    return value;
  }
}
