'use es6';

import {Record} from 'immutable';

let options = {
  per_page: 10,
  page: 1
};

export default class BaseQuery extends Record(options) {
  buildQueryParameters() {
    return {
      per_page: this.per_page,
      page: this.page
    };
  }
};
