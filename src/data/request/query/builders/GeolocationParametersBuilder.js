'use es6';

import VenuePropertiesParametersBuilder from 'VenuePropertiesParametersBuilder';


export default class GeolocationParametersBuilder {
  static build(query) {
    return {
      geoIp: query.useIpAddress,
      lat: query.latitude,
      lon: query.longitude,
      range: String(query.range) + query.unit.value,
    };
  }
}
