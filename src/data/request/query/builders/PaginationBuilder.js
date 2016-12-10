'use es6';

import {Map} from 'immutable';

import Pagination from '../Pagination';

export default class PaginationBuilder {
  static build(json) {
    let args = Map();

    if ('page' in json) {
      args = args.set('page', PaginationBuilder.buildNumericValue(json['page']));
    }

    if ('perPage' in json)  {
      args = args.set('perPage', PaginationBuilder.buildNumericValue(json['perPage']));
    }

    return new Pagination(args.toJS());
  }

  static buildNumericValue(value) {
    if (!Number.isInteger(value)) {
      throw new TypeError('must be a number');
    }

    return value;
  }
}
