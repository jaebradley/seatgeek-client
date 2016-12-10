'use es6';

import {List, Map} from 'immutable';

import PerformersSearch from '../PerformersSearch';
import Genre from '../../../Genre';
import Taxonomy from '../../../Taxonomy';

export default class PerformersSearchBuilder {
  static build(json) {
    let args = Map();

    if ('ids' in json) {
      args = args.set('ids', PerformersSearchBuilder.buildIds(json['ids']));
    }

    if ('slugs' in json) {
      args = args.set('slugs', PerformersSearchBuilder.buildSlugs(json['slugs']));
    }

    if ('genres' in json) {
      args = args.set('genres', PerformersSearchBuilder.buildSlugs(json['genres']));
    }

    if ('taxonomies' in json) {
      args = args.set('taxonomies', PerformersSearchBuilder.buildSlugs(json['taxonomies']));
    }

    if ('queryString' in json) {
      args = args.set('queryString', PerformersSearchBuilder.buildQueryString(json['queryString']));
    }

    if ('page' in json) {
      args = args.set('page', PerformersSearchBuilder.buildNumericValue(json['page']));
    }

    if ('perPage' in json)  {
      args = args.set('perPage', PerformersSearchBuilder.buildNumericValue(json['perPage']));
    }

    return new PerformersSearch(args.toJS());
  }

  static buildIds(ids) {
    if (!Array.isArray(ids)) {
      throw new TypeError('ids must be an array');
    }

    let parsedIds = List();

    ids.forEach(function(id) {
      if (!Number.isInteger(id)) {
        throw new TypeError('invalid id type');
      }

      parsedIds = parsedIds.push(id);
    });

    return parsedIds;
  }

  static buildSlugs(slugs) {
    if (!Arrays.isArray(slugs)) {
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
    if (!Arrays.isArray(genres)) {
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
    if (!Arrays.isArray(taxonomies)) {
      throw new TypeError('taxonomies must be an array');
    }

    taxonomies.forEach(function(taxonomy) {
      if (!(taxonomy instanceof Taxonomy)) {
        throw new TypeError('Not a Taxonomy instance');
      }
    });
  }

  static buildQueryString(queryString) {
    if ((typeof queryString !== 'undefined') && (typeof queryString !== 'string')) {
      throw new TypeError('invalid query string');
    }

    return queryString;
  }

  static buildNumericValue(value) {
    if (!Number.isInteger(value)) {
      throw new TypeError('must be a number');
    }

    return value;
  }
}
