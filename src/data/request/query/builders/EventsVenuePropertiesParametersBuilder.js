'use es6';

import {Map} from 'immutable';

import VenueProperties from '../VenueProperties';

export default class EventsVenuePropertiesParametersBuilder {
  static build(properties) {
    let parameters = Map();
    if (typeof properties.cityName !== 'undefined') {
      parameters = parameters.set(EventsVenuePropertiesParametersBuilder.getCityNamePropertyName(),
                                  properties.cityName);
    }

    if (typeof properties.stateCode !== 'undefined') {
      parameters = parameters.set(EventsVenuePropertiesParametersBuilder.getStateCodePropertyName(),
                                  properties.stateCode);
    }

    if (typeof properties.countryCode !== 'undefined') {
      parameters = parameters.set(EventsVenuePropertiesParametersBuilder.getCountryCodePropertyName(),
                                  properties.countryCode);
    }

    if (typeof properties.postalCode !== 'undefined') {
      parameters = parameters.set(EventsVenuePropertiesParametersBuilder.getPostalCodePropertyName(),
                                  properties.postalCode);
    }

    return parameters;
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
}
