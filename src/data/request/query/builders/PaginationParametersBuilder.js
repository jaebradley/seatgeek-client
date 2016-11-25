'use es6';

import {Map} from 'immutable';

export default class PaginationParametersBuilder {
  static build(pagination) {
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
