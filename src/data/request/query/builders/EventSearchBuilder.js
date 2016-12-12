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

export default class EventSearchBuilder {
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
      args = args.set('geolocation', EventSearchBuilder.buildGeolocation(json['geolocation']));
    }

    if ('page' in json) {
      args = args.set('page', Utilities.isInteger(json['page']));
    }

    if ('perPage' in json)  {
      args = args.set('perPage', Utilities.isInteger(json['perPage']));
    }

    return new EventSearch(args.toJS());
  }

  static buildVenuesFilter(venues) {
    let args = Map();
    if ('ids' in venues) {
      args = args.set('ids', Utilities.buildIds(venues['ids']));
    }

    if ('cityName' in json) {
      args = args.set('cityName', Utilities.isString(json['cityName']));
    }

    if ('stateCode' in json) {
      args = args.set('stateCode', Utilities.isString(json['stateCode']));
    }

    if ('countryCode' in json) {
      args = args.set('countryCode', Utilities.isString(json['countryCode']));
    }

    if ('postalCode' in json) {
      args = args.set('postalCode', Utilities.isString(json['postalCode']));
    }

    return new VenuesFilter(venueProperties.toJS());
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

        return new PerformerFilter(args.toJS());
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

        return new Filter(args.toJS());
      }));
  }

  static buildGeolocation(geolocation) {
    let args = Map();

    if ('useIpAddress' in geolocation) {
      args = args.set('useIpAddress', Utilities.isBoolean(geolocation['useIpAddress']));
    }

    if ('latitude' in geolocation) {
      args = args.set('latitude', Utilities.isNumber(geolocation['latitude']));
    }

    if ('longitude' in geolocation) {
      args = args.set('longitude', Utilities.isNumber(geolocation['longitude']));
    }

    if ('range' in geolocation) {
      args = args.set('range', Utilities.isInteger(geolocation['range']));
    }

    if (('unit' in geolocation) && (geolocation['unit'] instanceof Unit)) {
      args = args.set('unit', json['unit']);
    }

    return new Geolocation(args.toJS());
  }
}
