'use es6';

import {List, Map} from 'immutable';

import PerformersSearch from '../PerformersSearch';
import Genre from '../../../Genre';
import GenreFilter from '../GenreFilter';
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
      args = args.set('taxonomies', Utilities.buildTaxonomyFilters(json['taxonomies']));
    }

    if ('queryString' in json) {
      args = args.set('queryString', Utilities.isString(json['queryString']));
    }

    if ('page' in json) {
      args = args.set('page', Utilities.isInteger(json['page']));
    }

    if ('perPage' in json)  {
      args = args.set('perPage', Utilities.isInteger(json['perPage']));
    }

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

        return new GenreFilter(args.toJS());
      }));
  }
}