'use es6';

import {List} from 'immutable';

import Genre from '../../../Genre';

export default class PerformersSearchBuilder {
  static build(json) {
    let ids = List();
    let slugs = List();

    if ('ids' in json) {
      ids = PerformersSearchBuilder.buildIds(json['ids']);
    }

    if ('slugs' in json) {
      slugs = PerformersSearchBuilder.buildSlugs(json['slugs']);
    }

    if ('genres' in json) {

    }
  }

  static buildIds(ids) {
    if (typeof ids !== 'array') {
      throw new TypeError('ids must be an array');
    }

    ids.forEach(function(id) {
      if (typeof id !== 'number') {
        throw new TypeError('invalid id type');
      }
    });

    return List(ids);
  }

  static buildSlugs(slugs) {
    if (typeof slugs !== 'array') {
      throw new TypeError('slugs must be an array');
    }

    slugs.forEach(function(slug) {
      if (typeof slug !== 'string') {
        throw new TypeError('invalid slug type');
      }
    });

    return List(slugs);
  }

  static buildGenres(genres) {
    if (typeof genres !== 'array') {
      throw new TypeError('slugs must be an array');
    }

    genres.forEach(function(genre) {
      if (!(genre instanceof Genre)) {
        throw new TypeError('genre not an instance of Genre');
      }
    });

    return List(genres);
  }
}
