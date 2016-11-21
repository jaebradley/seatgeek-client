'use es6';

import VenuePropertiesParametersBuilder from './VenuePropertiesParametersBuilder';
import GeolocationParametersBuilder from './GeolocationParametersBuilder';
import PaginationParametersBuilder from './PaginationParametersBuilder';

import VenueProperties from '../VenueProperties';
import GeolocationQuery from '../GeolocationQuery';
import Pagination from '../Pagination';

export default class VenueSearchParametersBuilder {
  static build(query) {
    let parameters = {
      ids: query.ids,
      q: query.queryString,
    };
    Object.assign(parameters,
                  VenuePropertiesParametersBuilder.build(
                    new VenueProperties({
                      cityName: query.cityName,
                      stateCode: query.stateCode,
                      countryCode: query.countryCode,
                      postalCode: query.postalCode,
                    })
                  ),
                  GeolocationParametersBuilder.build(
                    new GeolocationQuery({
                      useIpAddress: query.useIpAddress,
                      latitude: query.latitude,
                      longitude: query.longitude,
                      range: query.range,
                      unit: query.unit,
                    })
                  ),
                  PaginationParametersBuilder.build(
                    new Pagination({
                      perPage: query.perPage,
                      page: query.page,
                    })
                  ));

    return parameters;
  }
}
