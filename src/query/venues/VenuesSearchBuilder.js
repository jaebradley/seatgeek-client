'use es6';

import {List, Map} from 'immutable';

import Geolocation from '../Geolocation';
import PaginationBuilder from '../PaginationBuilder';
import VenuesProperties from '../VenuesProperties';
import VenuesSearch from './VenuesSearch';
import Utilities from '../Utilities';

export default class VenuesSearchBuilder {
  static build(json) {
    let args = Map();

    if ('queryString' in json) {
      args = args.set('queryString', Utilities.isString(json['queryString']));
    }

    args = args.set('properties', VenuesSearchBuilder.buildProperties(json));
    args = args.set('geolocation', new Geolocation(Utilities.buildGeolocationParameters(json)));
    args = args.set('pagination', PaginationBuilder.build(json));

    return new VenuesSearch(args);
  }

  static buildProperties(json) {
    let args = Map();
    if ('ids' in json) {
      if (!Array.isArray(json['ids'])) {
        throw new TypeError('expected an array');
      }

      args = args.set('ids', List(json['ids']));
    }

    args = args.merge(Utilities.buildVenueParameters(json));
    return new VenuesProperties(args);
  }
}
