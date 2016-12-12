'use es6';

import {List, Map} from 'immutable';

import Geolocation from '../Geolocation';
import PerformerSpecificity from '../PerformerSpecificity';
import PerformerField from '../PerformerField';
import PerformerFilter from '../PerformerFilter';
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
      args = args.set('venues', EventSearchBuilder.buildVenuesFilter(json['venues']));
    }

    if ('performers' in json) {
      args = args.set('performers', EventSearchBuilder.buildPerformerFilters(json['performers']));
    }

    if ('taxonomies' in json) {
      args = args.set('taxonomies', Utilities.buildTaxonomyFilters(json['taxonomies']))
    }

    if ('filters' in json) {
      args = args.set('filters', EventSearchBuilder.buildFilters(json['filters']))
    }

    if ('geolocation' in json) {
      args = args.set('geolocation', new Geolocation(Utilities.buildGeolocationParameters(json['geolocation'])));
    }

    if ('page' in json) {
      args = args.set('page', Utilities.isInteger(json['page']));
    }

    if ('perPage' in json)  {
      args = args.set('perPage', Utilities.isInteger(json['perPage']));
    }

    return new EventSearch(args);
  }

  static buildVenuesFilter(venues) {
    let args = Map();
    if ('ids' in venues) {
      args = args.set('ids', Utilities.buildIds(venues['ids']));
    }

    args.merge(Utilities.buildVenueParameters());

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
}
