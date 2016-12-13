'use es6';

import {List, Map} from 'immutable';

import Unit from '../../../Unit';
import VenueSearch from '../VenueSearch';
import Utilities from './Utilities';

export default class VenueSearchBuilder {
  static build(json) {
    let args = Map();

    if ('ids' in json) {
      args = args.set('ids', Utilities.buildIds(json['ids']));
    }

    args = args.merge(Utilities.buildVenueParameters(json));

    if ('queryString' in json) {
      args = args.set('queryString', Utilities.isString(json['queryString']));
    }

    args = args.merge(Utilities.buildGeolocationParameters(json));

    if ('page' in json) {
      args = args.set('page', Utilities.isInteger(json['page']));
    }

    if ('perPage' in json)  {
      args = args.set('perPage', Utilities.isInteger(json['perPage']));
    }

    return new VenueSearch(args);
  }
}
