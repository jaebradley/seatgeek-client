'use es6';

import rp from 'request-promise';

import Unit from './data/Unit';
import QueryParameterBuilder from './data/request/query/QueryParameterBuilder';
import Subpath from './data/request/Subpath';

let baseUri = 'https://api.seatgeek.com/2/';
let headers = { 'User-Agent': 'Request-Promise' };

export default class Client {
  constructor() {}

  static getGenres(perPage=100, page=1) {
    return Client.fetch(QueryParameterBuilder.buildPageParameters(perPage, page),
                        Subpath.GENRES.value);
  }

  static getTaxonomies(perPage=100, page=1) {
    return Client.fetch(QueryParameterBuilder.buildPageParameters(perPage, page),
                        Subpath.TAXONOMIES.value);
  }

  static getPerformers(ids=[], slug=undefined, primaryGenres=[], otherGenres=[],
                       taxonomies=[], perPage=100, page=1) {
    return Client.fetch(QueryParameterBuilder.buildPerformerQueryParameters(ids, slug, primaryGenres, otherGenres, taxonomies, perPage, page),
                        Subpath.PERFORMERS.value);
  }

  static getVenues(cityName=undefined, stateCode=undefined, countryCode=undefined,
                   postalCode=undefined, queryString=undefined, geoIp=true,
                   latitude=undefined, longitude=undefined, address=undefined,
                   range=10, unit=Unit.MILE, perPage=100, page=1) {

    return Client.fetch(QueryParameterBuilder.buildVenueQueryParameters(cityName, stateCode, countryCode, postalCode, queryString, geoIp, latitude, longitude, address, range, unit, perPage, page),
                        Subpath.VENUES.value);
  }

  static buildRequest(parameters, subpath) {
    return {
      uri: baseUri + subpath,
      qs: parameters,
      headers: headers,
      json: true
    }
  }

  static fetch(parameters, subpath) {
    return rp(Client.buildRequest(parameters, subpath))
      .then(response => response)
      .catch(err => console.log(err));
  }
}
