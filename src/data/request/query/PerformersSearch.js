'use es6';

import {Map, List, Record} from 'immutable';

import Constants from '../../Constants';

let DEFAULTS = Map({
  ids: new List(),
  slugs: new List(),
  taxonomies: new List(),
  genres: new List(),
  queryString: undefined,
  perPage: Constants.getDefaultPerPage(),
  page: Constants.getDefaultPage(),
});

export default class PerformersSearch extends Record(DEFAULTS.toJS()) {
}
