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

    if ('queryString' in json) {
      args = args.set('queryString', Utilities.isString(json['queryString']));
    }

    if ('useIpAddress' in json) {
      args = args.set('useIpAddress', Utilities.buildBoolean(json['useIpAddress']));
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

    if ('page' in json) {
      args = args.set('page', Utilities.isInteger(json['page']));
    }

    if ('perPage' in json)  {
      args = args.set('perPage', Utilities.isInteger(json['perPage']));
    }

    return new VenueSearch(args);
  }
}
