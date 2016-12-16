'use es6';

import {Map} from 'immutable';

import Pagination from './Pagination';

export default class PaginationParametersBuilder {
  static build(search) {
    return Map({
      per_page: search.perPage,
      page: search.page
    });
  }
}
