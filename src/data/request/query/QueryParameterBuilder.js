'use es6';

import Unit from '../../Unit';
import Genre from '../../Genre';
import Taxonomy from '../../Taxonomy';
import SortQuery from './SortQuery';
import FilterQuery from './FilterQuery';
import EventVenueLocationQuery from './EventVenueLocationQuery';
import VenueLocationQuery from './VenueLocationQuery';
import GeolocationQuery from './GeolocationQuery';
import PaginationQuery from './PaginationQuery';
import PerformerQueryParameter from './PerformerQueryParameter';
import TaxonomyQueryParameter from './TaxonomyQueryParameter';

export default class QueryParameterBuilder{

  static buildEventsQueryParameters(performerQueryParameters, taxonomyQueryParameters, venueIds, cityName,
                          stateCode, countryCode, postalCode, useIpAddress,
                          latitude, longitude, range, unit, sortOption,
                          sortDirection, filterQueries, perPage, page) {
    if (!(performerQueryParameters instanceof Array)) {
      throw new Error('performers must be an Array');
    }

    if (!(taxonomyQueryParameters instanceof Array)) {
      throw new Error('taxonomies must be an Array');
    }

    let queryParameters = {};
    let taxonomyQuery = QueryParameterBuilder.buildTaxonomyQueryParameters(taxonomyQueryParameters);
    let performerQuery = QueryParameterBuilder.buildPerformerQueryParameters(performerQueryParameters);
    let eventVenueLocationQuery = new EventVenueLocationQuery(venueIds, cityName, stateCode, countryCode, postalCode);
    let sortQuery = new SortQuery(sortOption, sortDirection);
    let geolocationQuery = new GeolocationQuery({
      useIpAddress: useIpAddress,
      latitude: latitude,
      longitude: longitude,
      range: range,
      unit: unit,
    });
    let paginationQuery = new PaginationQuery(perPage, page);

    Object.assign(queryParameters,
                  taxonomyQuery,
                  performerQuery,
                  sortQuery.buildQueryParameters(),
                  FilterQuery.buildFilterQueriesParameters(filterQueries),
                  eventVenueLocationQuery.buildQueryParameters(),
                  geolocationQuery.buildQueryParameters(),
                  paginationQuery.buildQueryParameters());

    return queryParameters;
  }
};
