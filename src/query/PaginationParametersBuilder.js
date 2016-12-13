'use es6';

import {Map} from 'immutable';

import Pagination from './Pagination';

export default class PaginationParametersBuilder {
  static build(pagination) {
    if (!(pagination instanceof Pagination)) {
      throw new TypeError('expected Pagination');
    }
    
    let parameters = Map();
    if (typeof pagination.perPage !== 'undefined') {
      parameters = parameters.set(PaginationParametersBuilder.getPerPageParameterName(),
                                  pagination.perPage);
    }

    if (typeof pagination.page !== 'undefined') {
      parameters = parameters.set(PaginationParametersBuilder.getPageParameterName(),
                                  pagination.page);
    }

    return parameters;
  }

  static getPerPageParameterName() {
    return 'per_page';
  }

  static getPageParameterName() {
    return 'page';
  }
}
