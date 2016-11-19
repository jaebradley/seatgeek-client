'use es6';

import {Record} from 'immutable';

import PageQuery from './PageQuery';

let defaults = {
  ids: [],
  slugs: [],
  genreQueryParameters: [],
  taxonomyQueryParameters: [],
  pageQuery: new PageQuery(),
  queryString: undefined,
};

export default class PerformersQuery extends Record(defaults) {
}
