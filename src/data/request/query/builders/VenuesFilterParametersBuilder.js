'use es6';

import {Map} from 'immutable';

import VenuesFilter from '../VenuesFilter';
import EventsVenuePropertiesParametersBuilder from './EventsVenuePropertiesParametersBuilder';

export default class VenuesFilterParametersBuilder {
  static build(filter) {
    if (!(filter instanceof VenuesFilter)) {
      throw new TypeError('not a VenuesFilter');
    }

    let parameters = Map();
    if (typeof filter.ids !== 'undefined') {
      parameters = parameters.set(VenuesFilterParametersBuilder.getIdsParameterName(),
                                  filter.ids);
    }

    if (typeof filter.properties !== 'undefined') {
      parameters = parameters.merge(EventsVenuePropertiesParametersBuilder.build(filter.properties));
    }

    return parameters;
  }

  static getIdsParameterName() {
    return 'venue.id';
  }
};
