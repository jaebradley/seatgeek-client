'use es6';

import {Map} from 'immutable';

import Pagination from './Pagination';

export default class PaginationParametersBuilder {
  static build(pagination) {
    if (!(pagination instanceof Pagination)) {
      throw new TypeError('not a Pagination object');
    }
    return Map({
      per_page: pagination.perPage,
      page: pagination.page
    });
  }
}
