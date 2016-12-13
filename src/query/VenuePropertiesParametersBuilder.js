'use es6';

import {Map} from 'immutable';

import VenueProperties from './VenueProperties';

export default class VenuePropertiesParametersBuilder {
  static build(properties) {
    let parameters = Map();
    if (typeof properties.cityName !== 'undefined') {
      parameters = parameters.set(VenuePropertiesParametersBuilder.getCityNamePropertyName(),
                                  properties.cityName);
    }

    if (typeof properties.stateCode !== 'undefined') {
      parameters = parameters.set(VenuePropertiesParametersBuilder.getStateCodePropertyName(),
                                  properties.stateCode);
    }

    if (typeof properties.countryCode !== 'undefined') {
      parameters = parameters.set(VenuePropertiesParametersBuilder.getCountryCodePropertyName(),
                                  properties.countryCode);
    }

    if (typeof properties.postalCode !== 'undefined') {
      parameters = parameters.set(VenuePropertiesParametersBuilder.getPostalCodePropertyName(),
                                  properties.postalCode);
    }

    return parameters;
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
}
