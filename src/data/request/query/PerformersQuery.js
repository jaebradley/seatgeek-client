'use es6';

import {Record} from 'immutable';

let defaults = {
  ids: [],
  slugs: [],
  genreQueryParameters: [],
  taxonomyQueryParameters: [],
  perPage: 100,
  page: 1,
  queryString: undefined,
};

export default class PerformersQuery extends Record(defaults) {
}
