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

  static buildBoolean(value) {
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

  static isUnit(unit) {
    if (!(unit instanceof Unit)) {
      throw new TypeError('unit not an instance of Unit');
    }

    return unit;
  }
}
