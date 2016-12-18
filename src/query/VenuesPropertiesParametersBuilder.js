'use es6';

import {Map} from 'immutable';

import EventsSearch from './events/EventsSearch';

export default class VenuesPropertiesParametersBuilder {
  static build(venues) {
    let parameters = Map();

    if (venues.ids.size > 0) {
      parameters = parameters.set(VenuesPropertiesParametersBuilder.buildSearchTypeName(venues, 'id'));
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
    if (search instanceof EventsSearch) {
      return `venue.${name}`;
    }

    return name;
  }
};
