'use es6';

import {List} from 'immutable';

import Taxonomy from '../../../Taxonomy';
import TaxonomyField from '../TaxonomyField';
import TaxonomyFilter from '../TaxonomyFilter';
import Unit from '../../../Unit';

export default class Utilities {
  static buildIds(ids) {
    if (!Array.isArray(ids)) {
      throw new TypeError('ids must be an array');
    }

    return List(
      ids.map(function(id) {
        if (!Number.isInteger(id)) {
          throw new TypeError('invalid id type');
        }

        return id;
      }));
  }

  static isString(s) {
    if (typeof s !== 'string') {
      throw new TypeError('invalid string');
    }

    return s;
  }

  static isInteger(value) {
    if (!Number.isInteger(value)) {
      throw new TypeError('must be a number');
    }

    return value;
  }

  static isBoolean(value) {
    if (typeof value !== 'boolean') {
      throw new TypeError('must be a boolean');
    }

    return value;
  }

  static isNumber(value) {
    if (!Utilities.isNumeric(value)) {
      throw new TypeError('must be a number');
    }

    return value;
  }

  static isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  static buildTaxonomyFilters(filters) {
    if (!Array.isArray(filters)) {
      throw new TypeError('expected an array');
    }

    return List(
      filters.map(function(filter) {
        if (!filter['taxonomy'] instanceof Taxonomy) {
          throw new TypeError('expected a Taxonomy');
        }
        let args = Map({taxonomy: filter[taxonomy]});
        if ('field' in filter) {
          if (!(filter['field'] instanceof TaxonomyField)) {
            throw new TypeError('expected TaxonomyField');
          }
          args = args.set('field', filter['field']);
        }
        return new TaxonomyFilter(args.toJS());
      }));
  }

  static buildVenueParameters(json) {
    let args = Map();

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

    return args;
  }

  static buildGeolocationParameters(json) {
    let args = Map();

    if ('useIpAddress' in json) {
      args = args.set('useIpAddress', Utilities.isBoolean(json['useIpAddress']));
    }

    if ('latitude' in json) {
      args = args.set('latitude', Utilities.isNumber(json['latitude']));
    }

    if ('longitude' in json) {
      args = args.set('longitude', Utilities.isNumber(json['longitude']));
    }

    if ('range' in json) {
      args = args.set('range', Utilities.isInteger(json['range']));
    }

    if ('unit' in json) {
      args = args.set('unit', Utilities.isUnit(json['unit']));
    }

    return args;
  }

  static isUnit(unit) {
    if (!(unit instanceof Unit)) {
      throw new TypeError('unit not an instance of Unit');
    }

    return unit;
  }
}
