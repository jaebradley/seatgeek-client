'use es6';

import Unit from '../../Unit';

export default class GeolocationQuery {
  constructor(useIpAddress, latitude, longitude, range, unit) {
    if (typeof useIpAddress !== 'boolean') {
      throw new Error('geoIp must be a boolean');
    }

    if (((typeof latitude !== 'undefined') && (typeof longitude === 'undefined'))
        || ((typeof latitude === 'undefined') && (typeof longitude !== 'undefined'))) {
      throw new Error('both latitude and longitude need to be defined or undefined');
    }

    if ((typeof latitude !== 'undefined') && (typeof latitude !== 'number')) {
      throw new Error('defined latitude must have a numeric value');
    }

    if ((typeof latitude !== 'undefined') && (typeof longitude !== 'number')) {
      throw new Error('defined longitude must have a numeric value');
    }

    if (typeof range !== 'number') {
      throw new Error('range must have a numeric value');
    }

    if (!(unit instanceof Unit)) {
      throw new Error('unit must be a Unit value');
    }

    if (!useIpAddress) {
      useIpAddress = undefined;
    }

    this.useIpAddress = useIpAddress;
    this.latitude = latitude;
    this.longitude = longitude;
    this.range = range;
    this.unit = unit;
  }

  buildQueryParameters() {
    return {
      geoIp: this.useIpAddress,
      lat: this.latitude,
      lon: this.longitude,
      range: String(this.range) + this.unit.value,
    };
  }
}
