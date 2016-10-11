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

  static getPerformers(ids=[], slug=undefined, primaryGenres=[], otherGenres=[],
                       taxonomies=[], parentTaxonomies=[], queryString=undefined, perPage=100, page=1) {
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

  static getEvents(taxonomies=[], performerSlugs=[], venueIds=[], cityName=undefined,
                   stateCode=undefined, countryCode=undefined, postalCode=undefined,
                   queryString=undefined, geoIp=true, latitude=undefined, longitude=undefined,
                   range=10, unit=Unit.MILE, sortOption=SortOption.SCORE, sortDirection=SortDirection.DESCENDING,
                   filterQueries=[], perPage=100, page=1) {
   let parameters = QueryParameterBuilder.buildEventsQueryParameters(taxonomies, performerSlugs, venueIds, cityName,
                                                                     stateCode, countryCode, postalCode, geoIp, latitude,
                                                                     longitude, range, unit, sortOption, sortDirection,
                                                                     filterQueries, perPage, page);
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
