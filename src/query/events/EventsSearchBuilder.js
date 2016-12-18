'use es6';

import {List, Map} from 'immutable';

import EventsSearch from './EventsSearch';
import Filter from './filter/Filter';
import FilterOption from './filter/FilterOption';
import Operator from './filter/Operator';
import Geolocation from '../Geolocation';
import PaginationBuilder from '../PaginationBuilder';
import PerformerSpecificity from './performer/PerformerSpecificity';
import PerformerField from './performer/PerformerField';
import PerformerFilter from './performer/PerformerFilter';
import SortFilter from './sort/SortFilter';
import SortDirection from './sort/SortDirection';
import SortOption from './sort/SortOption';
import Taxonomy from '../../data/Taxonomy';
import TaxonomyField from '../TaxonomyField';
import TaxonomyFilter from '../TaxonomyFilter';
import VenuesProperties from '../VenuesProperties';
import Unit from '../../data/Unit';

import Utilities from '../Utilities';

export default class EventsSearchBuilder {
  static build(json) {
    let args = Map();

    if ('ids' in json) {
      args = args.set('ids', Utilities.buildIds(json['ids']));
    }

    args = args.merge(EventsSearchBuilder.buildVenuesProperties(json));

    if ('performers' in json) {
      args = args.set('performers', EventsSearchBuilder.buildPerformerFilters(json['performers']));
    }

    if ('taxonomies' in json) {
      args = args.set('taxonomies', Utilities.buildTaxonomyFilters(json['taxonomies']))
    }

    if ('filters' in json) {
      args = args.set('filters', EventsSearchBuilder.buildFilters(json['filters']))
    }

    args = args.merge(Utilities.buildGeolocationParameters(json));

    if ('sort' in json) {
      args = args.set('sort', new SortFilter(EventsSearchBuilder.buildSortFilter(json['sort'])));
    }

    args = args.merge(PaginationBuilder.build(json));

    return new EventsSearch(args);
  }

  static buildVenuesProperties(json) {
    let args = new Map();
    if ('venueIds' in json) {
      args = args.set('id', Utilities.buildIds(json['venueIds']));
    }

    args = args.merge(Utilities.buildVenueParameters(json));
    return new VenuesProperties(args);
  }

  static buildPerformerFilters(filters) {
    if (!Array.isArray(filters)) {
      throw new TypeError('expected an array');
    }

    return List(
      filters.map(function(filter) {
        if (typeof filter['value'] === 'undefined') {
          throw new ReferenceError('expected value field');
        }

        let args = Map({value: filter['value']});
        if ('field' in filter) {
          if (!(filter['field'] instanceof PerformerField)) {
            throw new TypeError('expected a PerformerField');
          }

          args = args.set('field', filter['field']);
        }

        if ('specificity' in filter) {
          if (!(filter['specificity'] instanceof PerformerSpecificity)) {
            throw new TypeError('expected a PerformerSpecificity');
          }

          args = args.set('specificity', filter['specificity']);
        }

        return new PerformerFilter(args);
      }));
  }

  static buildFilters(filters) {
    if (!Array.isArray(filters)) {
      throw new TypeError('expected an array');
    }

    return List(
      filters.map(function(filter) {
        if (typeof filter['value'] === 'undefined') {
          throw new ReferenceError('expected value field');
        }

        let args = Map({value: filter['value']});
        if ('option' in filter) {
          if (!(filter['option'] instanceof FilterOption)) {
            throw new TypeError('expected FilterOption');
          }

          args = args.set('option', filter['option']);
        }

        if ('operator' in filter) {
          if (!(filter['operator'] instanceof Operator)) {
            throw new TypeError('expected Operator');
          }

          args = args.set('operator', filter['operator']);
        }

        return new Filter(args);
      }));
  }

  static buildSortFilter(filter) {
    let args = Map();
    if ('option' in filter) {
      if (!(filter['option'] instanceof SortOption)) {
        throw new TypeError('expected SortOption');
      }

      args = args.set('option', filter['option']);
    }

    if ('direction' in filter) {
      if (!(filter['direction'] instanceof SortDirection)) {
        throw new TypeError('expected SortDirection');
      }

      args = args.set('direction', filter['direction']);
    }

    return new SortFilter(args);
  }
}
