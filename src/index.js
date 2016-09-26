'use es6';

import rp from 'request-promise';

import Unit from './data/Unit';
import BaseQuery from './data/request/query/BaseQuery';
import VenueQuery from './data/request/query/VenueQuery';
import Subpath from './data/request/Subpath';

let baseUri = 'https://api.seatgeek.com/2/';
let headers = { 'User-Agent': 'Request-Promise' };

export default class Client {
  constructor() {}

  static getGenres(perPage=100, page=1) {
    return Client.fetch(Client.buildPageParameters(perPage, page),
                        Subpath.GENRES.value);
  }

  static getTaxonomies(perPage=100, page=1) {
    return Client.fetch(Client.buildPageParameters(perPage, page),
                        Subpath.TAXONOMIES.value);
  }

  static getVenues(cityName=undefined, stateCode=undefined, countryCode=undefined,
                   postalCode=undefined, queryString=undefined, geoIp=true,
                   latitude=undefined, longitude=undefined, address=undefined,
                   range=10, units='mi', perPage=100, page=1) {

    let query = new VenueQuery({
      cityName: cityName,
      stateCode: stateCode,
      countryCode: countryCode,
      postalCode: postalCode,
      queryString: queryString,
    });

    return Client.fetch(Client.buildQueryParameters(query, geoIp, latitude, longitude, perPage, page),
                        Subpath.VENUES.value);
  }

  static buildQueryParameters(query, geoIp, latitude, longitude, perPage, page) {
    let queryParameters = query.buildQueryParameters();
    Object.assign(queryParameters,
                  Client.buildGeolocationParameters(geoIp, latitude, longitude),
                  Client.buildPageParameters(perPage, page));
    return queryParameters;
  }

  static buildPageParameters(perPage, page) {
    return {
      per_page: perPage,
      page: page,
    };
  }

  static buildGeolocationParameters(geoIp, latitude, longitude) {
      if (geoIp) {
        latitude = undefined;
        longitude = undefined;
      }

      if (((typeof latitude === 'undefined') && (typeof longitude !== 'undefined'))
        || ((typeof latitude !== 'undefined') && (typeof longitude === 'undefined'))) {
          throw 'latitude and longitude must both be defined';
      }

      return {
        geoIp: geoIp,
        latitude: latitude,
        longitude: longitude,
      };
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
