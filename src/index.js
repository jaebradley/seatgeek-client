'use es6';

import rp from 'request-promise';

import GenreQuery from './data/query/GenreQuery';
import GenresResponse from './data/GenresResponse';

let baseUri = 'https://api.seatgeek.com/2/';
let headers = { 'User-Agent': 'Request-Promise' };
let genresPath = 'genres';

export default class Client {
  constructor() {}

  static fetchGenres(per_page=100, page=1) {
    let query = new GenreQuery({
      per_page: per_page,
      page: page
    });

    return Client.fetch(query, GenresResponse);
  }

  static buildRequest(query) {
    return {
      uri: baseUri + query.getPath(),
      qs: query.buildQueryParameters(),
      headers: headers,
      json: true
    }
  }

  static fetch(query, responseType) {
    return rp(Client.buildRequest(query))
      .then(response => responseType.deserializeResponse(response))
      .catch(err => console.log(err));
  }
}
