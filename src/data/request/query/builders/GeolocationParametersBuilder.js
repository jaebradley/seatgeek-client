'use es6';

import {Map} from 'immutable';
import Geolocation from '../Geolocation';

export default class GeolocationParametersBuilder {
  static build(geolocation) {
    if (!(geolocation instanceof Geolocation)) {
      throw new TypeError('not a Geolocation instance');
    }

    let parameters = Map();
    if (typeof geolocation.useIpAddress !== 'undefined') {
      parameters = parameters.set(GeolocationParametersBuilder.getUseIpAddressParameterName(),
                                  geolocation.useIpAddress);
    }

    if (typeof geolocation.latitude !== 'undefined') {
      parameters = parameters.set(GeolocationParametersBuilder.getLatitudeParameterName(),
                                  geolocation.latitude);
    }

    if (typeof geolocation.longitude !== 'undefined') {
      parameters = parameters.set(GeolocationParametersBuilder.getLongitudeParameterName(),
                                  geolocation.longitude);
    }

    if ((typeof geolocation.range !== 'undefined') && (typeof geolocation.unit !== 'undefined')) {
      parameters = parameters.set(GeolocationParametersBuilder.getRangeParameterName(),
                                  GeolocationParametersBuilder.buildRangeParameterValue(geolocation));
    }

    return parameters;
  }

  static buildRangeParameterValue(geolocation) {
    return String(geolocation.range) + geolocation.unit.value;
  }

  static getUseIpAddressParameterName() {
    return 'geoIp';
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
