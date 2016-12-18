'use es6';

import {Map, Record} from 'immutable';

import Constants from '../data/Constants';

let defaults = {
  perPage: Constants.getDefaultPerPage(),
  page: Constants.getDefaultPage(),
};

export default class Pagination extends Record(defaults) {
};
