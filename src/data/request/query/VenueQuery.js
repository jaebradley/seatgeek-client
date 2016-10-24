'use es6';

import PaginationQuery from './PaginationQuery';
import VenueLocationQuery from './VenueLocationQuery';
import GeolocationQuery from './GeolocationQuery';

export default class VenueQuery {
  constructor(cityName, stateCode, countryCode, postalCode, queryString,
              useIpAddress, latitude, longitude, range, unit, perPage, page)) {

    if ((typeof queryString !== 'undefined') && (typeof queryString !== 'string')) {
      throw new Error('defined queryString must be String');
    }

    this.queryString = queryString;
    this.venueLocationQuery = new VenueLocationQuery(cityName, stateCode, countryCode, postalCode);
    this.geolocationQuery = new GeolocationQuery(useIpAddress, latitude, longitude, range, unit);
    this.paginationQuery = new PaginationQuery(perPage, page);
  }

  buildQueryParameters() {
    let queryParameters = {
      'q': this.queryString,
    };

    Object.assign(queryParameters,
                  this.venueLocationQuery.buildQueryParameters(),
                  this.geolocationQuery.buildQueryParameters(),
                  this.paginationQuery.buildQueryParameters());

    return queryParameters;
  }
};
