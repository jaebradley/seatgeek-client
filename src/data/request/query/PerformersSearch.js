'use es6';

import {List, Record} from 'immutable';

import Pagination from './Pagination';

let defaults = {
  ids: new List(),
  slugs: new List(),
  taxonomies: new List(),
  genres: new List(),
  pagination: new Pagination(),
  queryString: undefined,
};

export default class PerformersSearch extends Record(defaults) {
}
