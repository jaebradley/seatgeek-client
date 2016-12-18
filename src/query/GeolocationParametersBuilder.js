'use es6';

import {Map} from 'immutable';

import Unit from '../data/Unit';

export default class GeolocationParametersBuilder {
  static build(geolocation) {
    let parameters = Map();

    if (geolocation.useIpAddress) {
      parameters = parameters.set('geoip', geolocation.useIpAddress);
    }

    if (typeof geolocation.latitude !== 'undefined') {
      parameters = parameters.set('lat', geolocation.latitude);
    }

    if (typeof geolocation.longitude !== 'undefined') {
      parameters = parameters.set('lon', geolocation.longitude);
    }

    if (typeof geolocation.range !== 'undefined') {
      parameters = parameters.set('range', GeolocationParametersBuilder.buildRangeParameterValue(geolocation));
    }

    return parameters;
  }

  static buildRangeParameterValue(geolocation) {
    return String(geolocation.range) + geolocation.unit.value;
  }
}
