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
