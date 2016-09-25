'use es6';

import {Record, Set} from 'immutable';

import Genre from './Genre';
import ResponseMetaData from './ResponseMetaData';

const options = {
  genres: new Set(),
  meta: new ResponseMetaData(),
};

export default class GenresResponse extends Record(options) {
  static deserializeResponse(response) {
    if (!('genres' in response)) {
      throw 'No genres field in response';
    }

    if (!('meta' in response)) {
      throw 'No meta field in response';
    }

    let genres = [];
    response.genres.forEach(genre => genres.push(Genre.fromJson(genre)));

    return new GenresResponse({
      genres: new Set(genres),
      meta: new ResponseMetaData(response.meta),
    });
  }
};
