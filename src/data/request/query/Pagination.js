'use es6';

import {Record} from 'immutable';

let defaults = {
  perPage: 100,
  page: 1,
};

export default class Pagination extends Record(defaults) {
};
