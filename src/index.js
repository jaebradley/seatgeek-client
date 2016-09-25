'use es6';

import rp from 'request-promise';

import BaseQuery from './data/request/query/BaseQuery';
import VenueQuery from './data/request/query/VenueQuery';
import Subpath from './data/request/Subpath';

let baseUri = 'https://api.seatgeek.com/2/';
let headers = { 'User-Agent': 'Request-Promise' };

export default class Client {
  constructor() {}

  static getGenres(per_page=100, page=1) {
    let query = new BaseQuery({
      per_page: per_page,
      page: page
    });

    return Client.fetch(query, Subpath.GENRES.value);
  }

  static getTaxonomies(per_page=100, page=1) {
    let query = new BaseQuery({
      per_page: per_page,
      page: page,
    });

    return Client.fetch(query, Subpath.TAXONOMIES.value);
  }

  static getVenues(cityName=undefined, stateCode=undefined, countryCode=undefined,
                   postalCode=undefined, queryString=undefined, perPage=100, page=1) {

    if ((typeof cityName !== 'undefined') && (typeof cityName !== 'string')) {
      throw 'cityName must be a string value';
    }

    if ((typeof stateCode !== 'undefined') && (typeof stateCode !== 'string') && stateCode.length != 2) {
      throw 'stateCode must be a string of length 2';
    }

    if ((typeof countryCode !== 'undefined') && (typeof countryCode !== 'string') && countryCode.length != 2) {
      throw 'countryCode must be a string of length 2';
    }

    if ((typeof postalCode !== 'undefined') && (typeof postalCode !== 'string')) {
      throw 'postalCode must be a string value';
    }

    if ((typeof queryString !== 'undefined') && (typeof queryString !== 'string')) {
      throw 'queryString must be a string value';
    }

    let query = new VenueQuery({
      perPage: perPage,
      page: page,
      cityName: cityName,
      stateCode: stateCode,
      countryCode: countryCode,
      postalCode: postalCode,
      queryString: queryString,
    });

    return Client.fetch(query, Subpath.VENUES.value);
  }

  static buildRequest(query, subpath) {
    return {
      uri: baseUri + subpath,
      qs: query.buildQueryParameters(),
      headers: headers,
      json: true
    }
  }

  static fetch(query, subpath) {
    return rp(Client.buildRequest(query, subpath))
      .then(response => response)
      .catch(err => console.log(err));
  }
}
