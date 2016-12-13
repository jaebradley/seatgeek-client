'use es6';

import {Map} from 'immutable';

export default class VenuesParametersBuilder {
  static build(venues, isEventsSearch) {
    let parameters = Map();

    if (typeof venues.cityName !== 'undefined') {
      parameters = parameters.set(VenuesParametersBuilder.getCityNamePropertyName(isEventsSearch),
                                  venues.cityName);
    }

    if (typeof filter.stateCode !== 'undefined') {
      parameters = parameters.set(VenuesParametersBuilder.getStateCodePropertyName(isEventsSearch),
                                  venues.stateCode);
    }

    if (typeof filter.countryCode !== 'undefined') {
      parameters = parameters.set(VenuesParametersBuilder.getCountryCodePropertyName(isEventsSearch),
                                  venues.countryCode);
    }

    if (typeof filter.postalCode !== 'undefined') {
      parameters = parameters.set(VenuesParametersBuilder.getPostalCodePropertyName(isEventsSearch),
                                  venues.postalCode);
    }

    return parameters;
  }

  static getIdsParameterName(isEventsSearch) {
    return isEventsSearch
           ? 'venue.id'
           : 'id' ;
  }

  static getCityNamePropertyName(isEventsSearch) {
    return 'venue.city';
  }

  static getStateCodePropertyName(isEventsSearch) {
    return 'venue.state';
  }

  static getCountryCodePropertyName(isEventsSearch) {
    return 'venue.country';
  }

  static getPostalCodePropertyName(isEventsSearch) {
    return 'venue.postal_code';
  }
};
