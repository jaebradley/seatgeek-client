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

let baseUri = 'https://api.seatgeek.com/2/';
let headers = { 'User-Agent': 'Request-Promise' };
let DEFAULT_PER_PAGE = 100;
let DEFAULT_PAGE = 1;

export default class Client {
  constructor() {}

  static getGenres(perPage=100, page=1) {

    let paginationQuery = new PaginationQuery(perPage, page);

    return Client.fetch(paginationQuery.buildQueryParameters(),
                        Subpath.GENRES.value);
  }

  static getTaxonomies(perPage=100, page=1) {

    let paginationQuery = new PaginationQuery(perPage, page);

    return Client.fetch(paginationQuery.buildQueryParameters(),
                        Subpath.TAXONOMIES.value);
  }

  static getPerformers(ids=[], slug=undefined, genreQueryParameters=[],
                       taxonomyQueryParameters=[], queryString=undefined,
                       perPage=DEFAULT_PER_PAGE, page=DEFAULT_PAGE) {

    let performerQuery = new PerformerQuery(ids, slug, genreQueryParameters,
                                            taxonomyQueryParameters, queryString,
                                            perPage, page);

    return Client.fetch(performerQuery.buildQueryParameters(),
                        Subpath.PERFORMERS.value);
  }

  static getPerformers(ids=[], slug=undefined, primaryGenres=[], otherGenres=[],
                       taxonomies=[], parentTaxonomies=[], queryString=undefined, perPage=100, page=1) {
    let performerQuery = new PerformerQuery(ids, slug, genreQueryParameters)
    return Client.fetch(QueryParameterBuilder.buildPerformerQueryParameters(ids, slug, primaryGenres, otherGenres, taxonomies, parentTaxonomies, queryString, perPage, page),
                        Subpath.PERFORMERS.value);
  }

  static getVenues(cityName=undefined, stateCode=undefined, countryCode=undefined,
                   postalCode=undefined, queryString=undefined, useIpAddress=true,
                   latitude=undefined, longitude=undefined, range=10, unit=Unit.MILE,
                   perPage=100, page=1) {

    let parameters = QueryParameterBuilder.buildVenueQueryParameters(cityName, stateCode, countryCode, postalCode,
                                                                     queryString, useIpAddress, latitude, longitude,
                                                                     range, unit, perPage, page);
    return Client.fetch(parameters, Subpath.VENUES.value);
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
    return Client.fetch(parameters, Subpath.EVENTS.value);
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
    return rp(Client.buildRequest(parameters, subpath))
      .then(response => response)
      .catch(err => console.log(err));
  }
}
