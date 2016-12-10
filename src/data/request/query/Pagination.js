'use es6';

import {Map, Record} from 'immutable';

import Constants from '../../Constants';

let DEFAULTS = Map({
  perPage: Constants.getDefaultPerPage(),
  page: Constants.getDefaultPage(),
});

export default class Pagination extends Record(DEFAULTS.toJS()) {
};
