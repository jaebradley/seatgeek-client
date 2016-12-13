'use es6';

import {Map} from 'immutable';

import Unit from '../data/Unit';

export default class GeolocationParametersBuilder {
  static build(search) {
    let parameters = Map();
    
    if (search.useIpAddress) {
      parameters = parameters.set(GeolocationParametersBuilder.getUseIpAddressParameterName(),
                                  search.useIpAddress);
    }

    if (typeof search.latitude !== 'undefined') {
      parameters = parameters.set(GeolocationParametersBuilder.getLatitudeParameterName(),
                                  search.latitude);
    }

    if (typeof search.longitude !== 'undefined') {
      parameters = parameters.set(GeolocationParametersBuilder.getLongitudeParameterName(),
                                  search.longitude);
    }

    if (typeof search.range !== 'undefined') {
      parameters = parameters.set(GeolocationParametersBuilder.getRangeParameterName(),
                                  GeolocationParametersBuilder.buildRangeParameterValue(search));
    }

    return parameters;
  }

  static buildRangeParameterValue(search) {
    return String(search.range) + search.unit.value;
  }

  static getUseIpAddressParameterName() {
    return 'geoip';
  }

  static getLatitudeParameterName() {
    return 'lat';
  }

  static getLongitudeParameterName() {
    return 'lon';
  }

  static getRangeParameterName() {
    return 'range';
  }
}
