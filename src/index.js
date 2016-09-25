'use es6';

import rp from 'request-promise';

import GenreQuery from './data/request/query/GenreQuery';
import Subpath from './data/request/Subpath';

let baseUri = 'https://api.seatgeek.com/2/';
let headers = { 'User-Agent': 'Request-Promise' };

export default class Client {
  constructor() {}

  static getGenres(per_page=100, page=1) {
    let query = new GenreQuery({
      per_page: per_page,
      page: page
    });

    return Client.fetch(query, Subpath.GENRES.value);
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
