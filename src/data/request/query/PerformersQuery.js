'use es6';

import {Record} from 'immutable';

import Pagination from './Pagination';

let defaults = {
  ids: [],
  slugs: [],
  genreQueryParameters: [],
  taxonomyQueryParameters: [],
  pagination: new Pagination(),
  queryString: undefined,
};

export default class PerformersQuery extends Record(defaults) {
}
