'use es6';

import {List, Map} from 'immutable';

import EventsSearch from '../EventsSearch';
import Filter from '../Filter';
import FilterOption from '../FilterOption';
import Operator from '../Operator';
import Geolocation from '../Geolocation';
import PerformerSpecificity from '../PerformerSpecificity';
import PerformerField from '../PerformerField';
import PerformerFilter from '../PerformerFilter';
import SortFilter from '../SortFilter';
import SortDirection from '../SortDirection';
import SortOption from '../SortOption';
import Taxonomy from '../../../Taxonomy';
import TaxonomyField from '../TaxonomyField';
import TaxonomyFilter from '../TaxonomyFilter';
import VenuesFilter from '../VenuesFilter';
import Unit from '../../../Unit';

import Utilities from './Utilities';

export default class EventsSearchBuilder {
  static build(json) {
    let args = Map();

    if ('ids' in json) {
      args = args.set('ids', Utilities.buildIds(json['ids']));
    }

    if ('venues' in json) {
      args = args.set('venues', EventsSearchBuilder.buildVenuesFilter(json['venues']));
    }

    if ('performers' in json) {
      args = args.set('performers', EventsSearchBuilder.buildPerformerFilters(json['performers']));
    }

    if ('taxonomies' in json) {
      args = args.set('taxonomies', Utilities.buildTaxonomyFilters(json['taxonomies']))
    }

    if ('filters' in json) {
      args = args.set('filters', EventsSearchBuilder.buildFilters(json['filters']))
    }

    if ('geolocation' in json) {
      args = args.set('geolocation', new Geolocation(Utilities.buildGeolocationParameters(json['geolocation'])));
    }

    if ('sort' in json) {
      args = args.set('sort', new SortFilter(EventsSearchBuilder.buildSortFilter(json['sort'])));
    }

    if ('page' in json) {
      args = args.set('page', Utilities.isInteger(json['page']));
    }

    if ('perPage' in json)  {
      args = args.set('perPage', Utilities.isInteger(json['perPage']));
    }

    return new EventsSearch(args);
  }

  static buildVenuesFilter(venues) {
    let args = Map();
    if ('ids' in venues) {
      args = args.set('ids', Utilities.buildIds(venues['ids']));
    }

    args = args.merge(Utilities.buildVenueParameters(venues));

    return new VenuesFilter(args);
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
          if (!filter['field'] instanceof PerformerField) {
            throw new TypeError('expected a PerformerField');
          }

          args = args.set('field', filter['field']);
        }

        if ('specificity' in filter) {
          if (!filter['specificity'] instanceof PerformerSpecificity) {
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
