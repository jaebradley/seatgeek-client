'use es6';

import {Record} from 'immutable';

import Constants from '../../Constants';

let defaults = {
  perPage: Constants.getDefaultPerPage(),
  page: Constants.getDefaultPage(),
};

export default class Pagination extends Record(defaults) {
};
