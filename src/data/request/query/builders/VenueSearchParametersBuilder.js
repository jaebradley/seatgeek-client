'use es6';

import {Map} from 'immutable';

import VenuePropertiesParametersBuilder from './VenuePropertiesParametersBuilder';
import GeolocationParametersBuilder from './GeolocationParametersBuilder';
import PaginationParametersBuilder from './PaginationParametersBuilder';

import VenueSearch from '../VenueSearch';
import VenueProperties from '../VenueProperties';
import Geolocation from '../Geolocation';
import Pagination from '../Pagination';

export default class VenueSearchParametersBuilder {
  static build(search) {
    if (!(search instanceof VenueSearch)) {
      throw new TypeError('must be a VenueSearch instance');
    }

    let parameters = Map();
    if (typeof search.ids !== 'undefined') {
      parameters = parameters.set(VenueSearchParametersBuilder.getIdsParameterName(),
                     search.ids);
    }

    if (typeof search.queryString !== 'undefined') {
      parameters = parameters.set(VenueSearchParametersBuilder.getQueryStringParameterName(),
                     search.queryString);
    }

    parameters = parameters.merge(VenuePropertiesParametersBuilder.build(
                                    new VenueProperties({
                                      cityName: search.cityName,
                                      stateCode: search.stateCode,
                                      countryCode: search.countryCode,
                                      postalCode: search.postalCode,
                                    })
                                  ),
                                  GeolocationParametersBuilder.build(
                                    new Geolocation({
                                      useIpAddress: search.useIpAddress,
                                      latitude: search.latitude,
                                      longitude: search.longitude,
                                      range: search.range,
                                      unit: search.unit,
                                    })
                                  ),
                                  PaginationParametersBuilder.build(
                                    new Pagination({
                                      perPage: search.perPage,
                                      page: search.page,
                                    })
                                  ));
    return parameters;
  }

  static getIdsParameterName() {
    return 'id';
  }

  static getQueryStringParameterName() {
    return 'q';
  }
}
