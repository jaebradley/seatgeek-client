'use es6';

import {List} from 'immutable';

import Genre from '../../../Genre';
import Taxonomy from '../../../Taxonomy';

export default class PerformersSearchBuilder {
  static build(json) {
    let ids = List();
    let slugs = List();
    let genres = List();
    let taxonomies = List();

    if ('ids' in json) {
      ids = PerformersSearchBuilder.buildIds(json['ids']);
    }

    if ('slugs' in json) {
      slugs = PerformersSearchBuilder.buildSlugs(json['slugs']);
    }

    if ('genres' in json) {
      genres = PerformersSearchBuilder.buildSlugs(json['genres']);
    }

    if ('taxonomies' in json) {
      taxonomies = PerformersSearchBuilder.buildSlugs(json['taxonomies']);
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
        throw new TypeError('Not a Genre instance');
      }
    });

    return List(genres);
  }

  static buildTaxonomies(taxonomies) {
    if (typeof taxonomies !== 'array') {
      throw new TypeError('taxonomies must be an array');
    }

    taxonomies.forEach(function(taxonomy) {
      if (!(taxonomy instanceof Taxonomy)) {
        throw new TypeError('Not a Taxonomy instance');
      }
    });
  }
}
