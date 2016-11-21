'use es6';

import {Record} from 'immutable';

let defaults = {
  genre: undefined,
  isPrimary: false,
};

export default class GenreFilter extends Record(defaults) {
};
