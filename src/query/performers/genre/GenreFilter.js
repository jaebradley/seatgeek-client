'use es6';

import {Record} from 'immutable';

import Genre from '../../../data/Genre';

let defaults = {
  genre: Genre.POP,
  isPrimary: false,
};

export default class GenreFilter extends Record(defaults) {
};
