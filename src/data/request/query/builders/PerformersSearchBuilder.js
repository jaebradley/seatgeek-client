'use es6';

import {List, Map} from 'immutable';

import PerformersSearch from '../PerformersSearch';
import Genre from '../../../Genre';
import Taxonomy from '../../../Taxonomy';
import Utilities from './Utilities';

export default class PerformersSearchBuilder {
  static build(json) {
    let args = Map();

    if ('ids' in json) {
      args = args.set('ids', Utilties.buildIds(json['ids']));
    }

    if ('slugs' in json) {
      args = args.set('slugs', PerformersSearchBuilder.buildSlugs(json['slugs']));
    }

    if ('genres' in json) {
      args = args.set('genres', PerformersSearchBuilder.buildGenres(json['genres']));
    }

    if ('taxonomies' in json) {
      args = args.set('taxonomies', PerformersSearchBuilder.buildTaxonomies(json['taxonomies']));
    }

    if ('queryString' in json) {
      args = args.set('queryString', Utilities.buildString(json['queryString']));
    }

    if ('page' in json) {
      args = args.set('page', Utilities.buildInteger(json['page']));
    }

    if ('perPage' in json)  {
      args = args.set('perPage', Utilities.buildInteger(json['perPage']));
    }

    return new PerformersSearch(args.toJS());
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
}
