'use es6';

import {List, Record} from 'immutable';

import Constants from '../../data/Constants';
import Pagination from '../Pagination';

let defaults = {
  ids: new List(),
  slugs: new List(),
  taxonomies: new List(),
  genres: new List(),
  queryString: undefined,
  pagination: new Pagination(),
};

export default class PerformersSearch extends Record(defaults) {
}
