'use es6';

import rp from 'request-promise';

import Subpath from './data/request/Subpath';

import Pagination from './data/request/query/Pagination';
import VenueSearch from './data/request/query/VenueSearch';
import EventsSearch from './data/request/query/EventsSearch';
import PerformersSearch from './data/request/query/PerformersSearch';

import PerformersSearchParametersBuilder from './data/request/query/builders/PerformersSearchParametersBuilder';
import PaginationParametersBuilder from './data/request/query/builders/PaginationParametersBuilder';
import VenueSearchParametersBuilder from './data/request/query/builders/VenueSearchParametersBuilder';
import EventsSearchParametersBuilder from './data/request/query/builders/EventsSearchParametersBuilder';

export default class SeatGeekClient {
  static getGenres(pagination) {
    let parameters = PaginationParametersBuilder.build(new Pagination(pagination));
    return SeatGeekClient.fetch(parameters, Subpath.GENRES.value);
  }

  static getTaxonomies(pagination) {
    let parameters = PaginationParametersBuilder.build(new Pagination(pagination));
    return SeatGeekClient.fetch(parameters, Subpath.TAXONOMIES.value);
  }

  static getPerformers(search) {
    let parameters = PerformersSearchParametersBuilder.build(new PerformersSearch(search));
    return SeatGeekClient.fetch(parameters, Subpath.PERFORMERS.value);
  }

  static getVenues(search) {
    let parameters = VenueSearchParametersBuilder.build(new VenueSearch(search));
    return SeatGeekClient.fetch(parameters, Subpath.VENUES.value);
  }

  static getEvents(search) {
    let parameters = EventsSearchParametersBuilder.build(new EventsSearch(search));
    return SeatGeekClient.fetch(parameters, Subpath.EVENTS.value);
  }

  static buildRequest(parameters, subpath) {
    return {
      uri: SeatGeekClient.getBaseUrl() + subpath,
      qs: parameters.toJS(),
      headers: SeatGeekClient.getHeaders(),
      json: true,
      resolveWithFullResponse: false,
      useQuerystring: true,
    }
  }

  static fetch(parameters, subpath) {
    return rp(SeatGeekClient.buildRequest(parameters, subpath))
      .then(response => response)
      .catch(err => console.log(err));
  }

  static getBaseUrl() {
    return 'https://api.seatgeek.com/2/';
  }

  static getHeaders() {
    return { 'User-Agent': 'Request-Promise' };
  }
}
