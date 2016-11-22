'use es6';

import Geolocation from '../Geolocation';

export default class GeolocationParametersBuilder {
  static build(geolocation) {
    return {
      geoIp: geolocation.useIpAddress,
      lat: geolocation.latitude,
      lon: geolocation.longitude,
      range: GeolocationParametersBuilder.buildRangeParameterValue(geolocation),
    };
  }

  static buildRangeParameterValue(geolocation) {
    return String(geolocation.range) + geolocation.unit.value;
  }
}
