'use es6';

import {Map} from 'immutable';

import VenuesFilter from '../VenuesFilter';

export default class VenuesFilterParametersBuilder {
  static build(filter) {
    if (!(filter instanceof VenuesFilter)) {
      throw new TypeError('filter is not a VenuesFilter');
    }

    let parameters = Map();
    if (typeof filter.ids !== 'undefined') {
      parameters = parameters.set(VenuesFilterParametersBuilder.getIdsParameterName(),
                                  filter.ids);
    }

    if (typeof filter.cityName !== 'undefined') {
      parameters = parameters.set(VenuesFilterParametersBuilder.getCityNamePropertyName(),
                                  filter.cityName);
    }

    if (typeof filter.stateCode !== 'undefined') {
      parameters = parameters.set(VenuesFilterParametersBuilder.getStateCodePropertyName(),
                                  filter.stateCode);
    }

    if (typeof filter.countryCode !== 'undefined') {
      parameters = parameters.set(VenuesFilterParametersBuilder.getCountryCodePropertyName(),
                                  filter.countryCode);
    }

    if (typeof filter.postalCode !== 'undefined') {
      parameters = parameters.set(VenuesFilterParametersBuilder.getPostalCodePropertyName(),
                                  filter.postalCode);
    }

    return parameters;
  }

  static getIdsParameterName() {
    return 'venue.id';
  }

  static getCityNamePropertyName() {
    return 'venue.city';
  }

  static getStateCodePropertyName() {
    return 'venue.state';
  }

  static getCountryCodePropertyName() {
    return 'venue.country';
  }

  static getPostalCodePropertyName() {
    return 'venue.postal_code';
  }
};
