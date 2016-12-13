'use es6';

import {Map} from 'immutable';

import Pagination from './Pagination';

export default class PaginationParametersBuilder {
  static build(search) {
    return Map({
      PaginationParametersBuilder.getPerPageParameterName(): search.perPage,
      PaginationParametersBuilder.getPageParameterName(): search.page
    });
  }

  static getPerPageParameterName() {
    return 'per_page';
  }

  static getPageParameterName() {
    return 'page';
  }
}
