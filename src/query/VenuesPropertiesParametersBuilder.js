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

    if (typeof filter.stateCode !== 'undefined') {
      parameters = parameters.set(VenuesPropertiesParametersBuilder.buildSearchTypeName(venues, 'state'),
                                  venues.stateCode);
    }

    if (typeof filter.countryCode !== 'undefined') {
      parameters = parameters.set(VenuesPropertiesParametersBuilder.buildSearchTypeName(venues, 'country'),
                                  venues.countryCode);
    }

    if (typeof filter.postalCode !== 'undefined') {
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
