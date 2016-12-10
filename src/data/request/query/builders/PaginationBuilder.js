'use es6';

import {Map} from 'immutable';

import Pagination from 'Pagination';

export default class PaginationBuilder {
  static build(json) {
    let arguments = Map();

    if ('page' in json) {
      arguments = arguments.set('page', PaginationBuilder.buildNumericValue(json['page']));
    }

    if ('perPage' in json)  {
      arguments = arguments.set('perPage', PaginationBuilder.buildNumericValue(json['perPage']));
    }

    return new Pagination(arguments.toJS());
  }

  static buildNumericValue(value) {
    if (!Number.isInteger(value)) {
      throw new TypeError('must be a number');
    }

    return value;
  }
}
