'use es6';

import BaseVenueLocationQuery from './BaseVenueLocationQuery';

export default class VenueLocationQuery extends BaseVenueLocationQuery {
  constructor(cityName, stateCode, countryCode, postalCode) {
    super(cityName, stateCode, countryCode, postalCode);
  }

  buildQueryParameters() {
    return {
      city: this.cityName,
      state: this.stateCode,
      country: this.countryCode,
      postal_code: this.postalCode,
    };
  }
}
