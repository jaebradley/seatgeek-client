'use es6';

import {List, Map} from 'immutable';

import PaginationBuilder from '../PaginationBuilder';
import PerformersSearch from './PerformersSearch';
import Genre from '../../data/Genre';
import GenreFilter from './genre/GenreFilter';
import Utilities from '../Utilities';

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
      args = args.set('taxonomies', Utilities.buildTaxonomyFilters(json['taxonomies']));
    }

    if ('queryString' in json) {
      args = args.set('queryString', Utilities.isString(json['queryString']));
    }

    args = args.merge(PaginationBuilder.build(json));

    return new PerformersSearch(args);
  }

  static buildSlugs(slugs) {
    if (!Array.isArray(slugs)) {
      throw new TypeError('slugs must be an array');
    }

    slugs.forEach(function(slug) {
      if (typeof slug !== 'string') {
        throw new TypeError('invalid slug type');
      }
    });

    return List(slugs);
  }

  static buildGenresFilter(filters) {
    if (!Array.isArray(filters)) {
      throw new TypeError('slugs must be an array');
    }

    return List(
      filters.map(function(filter) {
        let args = Map();
        if (!(filter.genre instanceof Genre)) {
          throw new TypeError('not a Genre instance');
        }

        args = args.set('genre', filter.genre);
        if ('isPrimary' in filter) {
          if (typeof filter['isPrimary'] !== 'boolean') {
            throw new TypeError('not a boolean');
          }
          args = args.set('isPrimary', filter['isPrimary']);
        }

        return new GenreFilter(args);
      }));
  }
}
