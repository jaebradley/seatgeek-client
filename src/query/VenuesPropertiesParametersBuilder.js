'use es6';

import {Map} from 'immutable';

import EventsVenuesProperties from './events/EventsVenuesProperties';

export default class VenuesPropertiesParametersBuilder {
  static build(venues) {
    let parameters = Map();

    if (venues.ids.size > 0) {
      parameters = parameters.set(VenuesPropertiesParametersBuilder.buildSearchTypeName(venues, 'id'), venues.ids);
    }

    if (typeof venues.cityName !== 'undefined') {
      parameters = parameters.set(VenuesPropertiesParametersBuilder.buildSearchTypeName(venues, 'city'),
                                  venues.cityName);
    }

    if (typeof venues.stateCode !== 'undefined') {
      parameters = parameters.set(VenuesPropertiesParametersBuilder.buildSearchTypeName(venues, 'state'),
                                  venues.stateCode);
    }

    if (typeof venues.countryCode !== 'undefined') {
      parameters = parameters.set(VenuesPropertiesParametersBuilder.buildSearchTypeName(venues, 'country'),
                                  venues.countryCode);
    }

    if (typeof venues.postalCode !== 'undefined') {
      parameters = parameters.set(VenuesPropertiesParametersBuilder.buildSearchTypeName(venues, 'postal_code'),
                                  venues.postalCode);
    }

    return parameters;
  }

  static buildSearchTypeName(search, name) {
    if (search instanceof EventsVenuesProperties) {
      return `venue.${name}`;
    }

    return name;
  }
};
