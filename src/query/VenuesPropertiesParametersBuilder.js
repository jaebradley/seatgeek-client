'use es6';

import {Map} from 'immutable';

export default class VenuesPropertiesParametersBuilder {
  static build(venues) {
    let parameters = Map();

    if (venues.ids.size > 0) {
      parameters = parameters.set(VenuesPropertiesParametersBuilder.buildSearchTypeName(search, 'id'));
    }

    if (typeof venues.cityName !== 'undefined') {
      parameters = parameters.set(VenuesPropertiesParametersBuilder.buildSearchTypeName(search, VenuesPropertiesParametersBuilder.getCityNamePropertyName()),
                                  venues.cityName);
    }

    if (typeof filter.stateCode !== 'undefined') {
      parameters = parameters.set(VenuesPropertiesParametersBuilder.buildSearchTypeName(search, VenuesPropertiesParametersBuilder.getStateCodePropertyName()),
                                  venues.stateCode);
    }

    if (typeof filter.countryCode !== 'undefined') {
      parameters = parameters.set(VenuesPropertiesParametersBuilder.buildSearchTypeName(search, VenuesPropertiesParametersBuilder.getCountryCodePropertyName()),
                                  venues.countryCode);
    }

    if (typeof filter.postalCode !== 'undefined') {
      parameters = parameters.set(VenuesPropertiesParametersBuilder.buildSearchTypeName(search, VenuesPropertiesParametersBuilder.getPostalCodePropertyName()),
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
