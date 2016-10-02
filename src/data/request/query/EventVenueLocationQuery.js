'use es6';

import BaseVenueLocationQuery from './BaseVenueLocationQuery';

export default class EventVenueLocationQuery extends BaseVenueLocationQuery {
  constructor(ids, cityName, stateCode, countryCode, postalCode) {
    super(cityName, stateCode, countryCode, postalCode);

    if (!(ids instanceof Array)) {
      throw new Error('ids must be an Array');
    }

    this.ids = ids;
  }

  buildQueryParameters() {
    return {
      'venue.id': this.ids,
      'venue.city': this.cityName,
      'venue.state': this.stateCode,
      'venue.country': this.countryCode,
      'venue.postal_code': this.postalCode,
    };
  }
};
