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

    if ('cityName' in json) {
      args = args.set('cityName', Utilities.buildString(json['cityName']));
    }

    if ('stateCode' in json) {
      args = args.set('stateCode', Utilities.buildString(json['stateCode']));
    }

    if ('countryCode' in json) {
      args = args.set('countryCode', Utilities.buildString(json['countryCode']));
    }

    if ('postalCode' in json) {
      args = args.set('postalCode', Utilities.buildString(json['postalCode']));
    }

    if ('queryString' in json) {
      args = args.set('queryString', Utilities.buildString(json['queryString']));
    }

    if ('useIpAddress' in json) {
      args = args.set('useIpAddress', Utilities.buildBoolean(json['useIpAddress']));
    }

    if ('latitude' in json) {
      args = args.set('latitude', Utilities.buildFloat(json['latitude']));
    }

    if ('longitude' in json) {
      args = args.set('longitude', Utilities.buildFloat(json['longitude']));
    }

    if ('range' in json) {
      args = args.set('range', Utilities.buildInteger(json['range']));
    }

    if (('unit' in json) && (json['unit'] instanceof Unit)) {
      args = args.set('unit', json['unit']);
    }

    if ('page' in json) {
      args = args.set('page', Utilities.buildInteger(json['page']));
    }

    if ('perPage' in json)  {
      args = args.set('perPage', Utilities.buildInteger(json['perPage']));
    }

    return new VenueSearch(args.toJS());
  }
}
