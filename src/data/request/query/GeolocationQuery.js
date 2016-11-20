'use es6';

import {Record} from 'immutable';

import Unit from '../../Unit';

let defaults = {
  useIpAddress: true,
  latitude: undefined,
  longitude: undefined,
  range: 10,
  unit: Unit.MILE,
};

export default class GeolocationQuery extends Record(defaults) {
  buildQueryParameters() {
    return {
      geoIp: this.useIpAddress,
      lat: this.latitude,
      lon: this.longitude,
      range: String(this.range) + this.unit.value,
    };
  }
}
