'use es6';

import {Map} from 'immutable';

export default class VenuesParametersBuilder {
  static build(search) {
    let parameters = Map();

    if (typeof venues.cityName !== 'undefined') {
      parameters = parameters.set(VenuesParametersBuilder.buildSearchTypeName(search, VenuesParametersBuilder.getCityNamePropertyName()),
                                  venues.cityName);
    }

    if (typeof filter.stateCode !== 'undefined') {
      parameters = parameters.set(VenuesParametersBuilder.buildSearchTypeName(search, VenuesParametersBuilder.getStateCodePropertyName()),
                                  venues.stateCode);
    }

    if (typeof filter.countryCode !== 'undefined') {
      parameters = parameters.set(VenuesParametersBuilder.buildSearchTypeName(search, VenuesParametersBuilder.getCountryCodePropertyName()),
                                  venues.countryCode);
    }

    if (typeof filter.postalCode !== 'undefined') {
      parameters = parameters.set(VenuesParametersBuilder.buildSearchTypeName(search, VenuesParametersBuilder.getPostalCodePropertyName()),
                                  venues.postalCode);
    }

    return parameters;
  }

  static buildSearchTypeName(search, name) {
    if (search instanceof EventsSearch) {
      return `venue.${name}`;
    }

    return name;
  }

  static getIdsParameterName() {
    return 'id' ;
  }

  static getCityNamePropertyName() {
    return 'city';
  }

  static getStateCodePropertyName() {
    return 'state';
  }

  static getCountryCodePropertyName() {
    return 'country';
  }

  static getPostalCodePropertyName() {
    return 'postal_code';
  }
};
