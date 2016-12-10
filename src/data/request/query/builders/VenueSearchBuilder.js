'use es6';

import {List, Map} from 'immutable';

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

    }
  }
}
