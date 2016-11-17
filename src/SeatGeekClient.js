'use es6';

import rp from 'request-promise';

import Unit from './data/Unit';
import QueryParameterBuilder from './data/request/query/QueryParameterBuilder';
import Subpath from './data/request/Subpath';
import SortOption from './data/request/query/SortOption';
import SortDirection from './data/request/query/SortDirection';
import FilterOption from './data/request/query/FilterOption';
import Operator from './data/request/query/Operator';
import PaginationQuery from './data/request/query/PaginationQuery';
import VenueQuery from './data/request/query/VenueQuery';

let baseUri = 'https://api.seatgeek.com/2/';
let headers = { 'User-Agent': 'Request-Promise' };
let DEFAULT_PER_PAGE = 100;
let DEFAULT_PAGE = 1;

export default class SeatGeekClient {
  constructor() {}

  static getGenres(perPage=100, page=1) {

    let paginationQuery = new PaginationQuery(perPage, page);

    return SeatGeekClient.fetch(paginationQuery.buildQueryParameters(),
                        Subpath.GENRES.value);
  }

  static getTaxonomies(perPage=100, page=1) {

    let paginationQuery = new PaginationQuery(perPage, page);

    return SeatGeekClient.fetch(paginationQuery.buildQueryParameters(),
                        Subpath.TAXONOMIES.value);
  }

  static getPerformers(ids=[], slugs=[], genreQueryParameters=[],
                       taxonomyQueryParameters=[], queryString=undefined,
                       perPage=DEFAULT_PER_PAGE, page=DEFAULT_PAGE) {

    let performerQuery = new PerformerQuery(ids, slugs, genreQueryParameters,
                                            taxonomyQueryParameters, queryString,
                                            perPage, page);

    return SeatGeekClient.fetch(performerQuery.buildQueryParameters(),
                        Subpath.PERFORMERS.value);
  }

  static getVenues(cityName=undefined, stateCode=undefined, countryCode=undefined,
                   postalCode=undefined, queryString=undefined, useIpAddress=true,
                   latitude=undefined, longitude=undefined, range=10, unit=Unit.MILE,
                   perPage=100, page=1) {

    let venueQuery = new VenueQuery(cityName, stateCode, countryCode, postalCode,
                                    queryString, useIpAddress, latitude, longitude,
                                    range, unit, perPage, page);
    return SeatGeekClient.fetch(venueQuery.buildQueryParameters(), Subpath.VENUES.value);
  }

  static getEvents(performerQueryParameters=[], taxonomyQueryParameters=[], venueIds=[], cityName=undefined,
                   stateCode=undefined, countryCode=undefined, postalCode=undefined,
                   useIpAddress=true, latitude=undefined, longitude=undefined,
                   range=10, unit=Unit.MILE, sortOption=SortOption.SCORE,
                   sortDirection=SortDirection.DESCENDING, filterQueries=[],
                   perPage=100, page=1) {
    let parameters = QueryParameterBuilder.buildEventsQueryParameters(performerQueryParameters, taxonomyQueryParameters, venueIds, cityName,
                                                            stateCode, countryCode, postalCode, useIpAddress,
                                                            latitude, longitude, range, unit, sortOption,
                                                            sortDirection, filterQueries, perPage, page);
    return SeatGeekClient.fetch(parameters, Subpath.EVENTS.value);
  }

  static buildRequest(parameters, subpath) {
    return {
      uri: baseUri + subpath,
      qs: parameters,
      headers: headers,
      json: true,
      resolveWithFullResponse: true,
      useQuerystring: true,
    }
  }

  static fetch(parameters, subpath) {
    return rp(SeatGeekClient.buildRequest(parameters, subpath))
      .then(response => response)
      .catch(err => console.log(err));
  }
}
