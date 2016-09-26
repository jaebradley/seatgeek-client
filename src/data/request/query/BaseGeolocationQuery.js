'use es6';

import {Record} from 'immutable';

import Unit from '../../Unit';

let options = {
  geoIp: false,
  latitude: undefined,
  longitude: undefined,
  address: undefined,
  range: 10,
  unit: Unit.MILES,
  per_page: 100,
  page: 1,
};

export default class BaseGeolocationQuery extends Record(options) {
  buildQueryParameters() {
    if (this.geoIp) {
      this.latitude = undefined;
      this.longitude = undefined;
    }

    if (((typeof this.latitude === 'undefined') && (typeof this.longitude !== 'undefined'))
      || ((typeof this.latitude !== 'undefined') && (typeof this.longitude === 'undefined'))) {
        throw 'latitude and longitude must both be defined';
    }

    return {
      geoIp: this.geoIp,
      latitude: this.latitude,
      longitude: this.longitude,
      range: this.range,
      unit: this.unit,
      per_page: this.per_page,
      page: this.page,
    };
  }
};
