'use es6';

import {Record, Map} from 'immutable';

const options = {
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

  getPath() {
    return 'genres';
  }
};
