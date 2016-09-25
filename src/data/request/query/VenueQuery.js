'use es6';

import {Record} from 'immutable';

let options = {
  perPage: 100,
  page: 1,
  cityName: undefined,
  stateCode: undefined,
  countryCode: undefined,
  postalCode: undefined,
  queryString: undefined,
};

export default class VenueQuery extends Record(options) {
  buildQueryParameters() {
    if ((typeof this.cityName !== 'undefined') && (typeof this.cityName !== 'string')) {
      throw 'cityName must be a string value';
    }

    if ((typeof this.stateCode !== 'undefined') && (typeof this.stateCode !== 'string') && this.stateCode.length != 2) {
      throw 'stateCode must be a string of length 2';
    }

    if ((typeof this.countryCode !== 'undefined') && (typeof this.countryCode !== 'string') && this.countryCode.length != 2) {
      throw 'countryCode must be a string of length 2';
    }

    if ((typeof this.postalCode !== 'undefined') && (typeof this.postalCode !== 'string')) {
      throw 'postalCode must be a string value';
    }

    if ((typeof this.queryString !== 'undefined') && (typeof this.queryString !== 'string')) {
      throw 'queryString must be a string value';
    }

    return {
      per_page: this.perPage,
      page: this.page,
      city: this.cityName,
      state: this.stateCode,
      country: this.countryCode,
      postal_code: this.postalCode,
      q: this.queryString,
    };
  }
}
