'use es6';

import {Map} from 'immutable';

import VenuePropertiesParametersBuilder from '../VenuePropertiesParametersBuilder';
import GeolocationParametersBuilder from '../GeolocationParametersBuilder';
import PaginationParametersBuilder from '../PaginationParametersBuilder';

import VenuesSearch from './VenuesSearch';
import VenueProperties from '../VenueProperties';
import Geolocation from '../Geolocation';

export default class VenuesSearchParametersBuilder {
  static build(search) {
    if (!(search instanceof VenuesSearch)) {
      throw new TypeError('expected a VenuesSearch');
    }

    let parameters = Map();
    if (search.ids.size > 0) {
      parameters = parameters.set(VenuesSearchParametersBuilder.getIdsParameterName(),
                                  search.ids);
    }

    if (typeof search.queryString !== 'undefined') {
      parameters = parameters.set(VenuesSearchParametersBuilder.getQueryStringParameterName(),
                                  search.queryString);
    }

    parameters = parameters.merge(VenueParametersBuilder.build(search),
                                  GeolocationParametersBuilder.build(search),
                                  PaginationParametersBuilder.build(search));
    return parameters;
  }

  static getIdsParameterName() {
    return 'id';
  }

  static getQueryStringParameterName() {
    return 'q';
  }
}
