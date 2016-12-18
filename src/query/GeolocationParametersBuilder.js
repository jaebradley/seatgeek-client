'use es6';

import {Map} from 'immutable';

import Unit from '../data/Unit';

export default class GeolocationParametersBuilder {
  static build(search) {
    let parameters = Map();

    if (search.useIpAddress) {
      parameters = parameters.set('geoip', search.useIpAddress);
    }

    if (typeof search.latitude !== 'undefined') {
      parameters = parameters.set('lat', search.latitude);
    }

    if (typeof search.longitude !== 'undefined') {
      parameters = parameters.set('lon', search.longitude);
    }

    if (typeof search.range !== 'undefined') {
      parameters = parameters.set('range', GeolocationParametersBuilder.buildRangeParameterValue(search));
    }

    return parameters;
  }

  static buildRangeParameterValue(search) {
    return String(search.range) + search.unit.value;
  }
}
