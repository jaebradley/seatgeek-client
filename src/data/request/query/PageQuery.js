'use es6';

import {Record} from 'immutable';

let defaults = {
  perPage: 100,
  page: 1,
};

export default class PageQuery extends Record(defaults) {
};
