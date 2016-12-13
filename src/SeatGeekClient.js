'use es6';

import rp from 'request-promise';

import Subpath from './data/Subpath';

import Pagination from './query/Pagination';
import VenuesSearch from './query/venues/VenuesSearch';
import EventsSearch from './query/events/EventsSearch';
import PerformersSearch from './query/performers/PerformersSearch';

import PerformersSearchBuilder from './query/performers/PerformersSearchBuilder';
import PaginationBuilder from './query/PaginationBuilder';
import VenuesSearchBuilder from './query/venues/VenuesSearchBuilder';
import EventsSearchBuilder from './query/events/EventsSearchBuilder';

import PerformersSearchParametersBuilder from './query/performers/PerformersSearchParametersBuilder';
import PaginationParametersBuilder from './query/PaginationParametersBuilder';
import VenuesSearchParametersBuilder from './query/venues/VenuesSearchParametersBuilder';
import EventsSearchParametersBuilder from './query/events/EventsSearchParametersBuilder';

export default class SeatGeekClient {
  constructor(clientId) {
    this.clientId = clientId,
  }

  getGenres(search) {
    let pagination = PaginationBuilder.build(search);
    let parameters = PaginationParametersBuilder.build(pagination);
    return this.fetch(parameters, Subpath.GENRES);
  }

  getTaxonomies(search) {
    let pagination = PaginationBuilder.build(search);
    let parameters = PaginationParametersBuilder.build(pagination);
    return this.fetch(parameters, Subpath.TAXONOMIES);
  }

  getPerformers(search) {
    let query = PerformersSearchBuilder.build(search);
    let parameters = PerformersSearchParametersBuilder.build(query);
    return this.fetch(parameters, Subpath.PERFORMERS);
  }

  getVenues(search) {
    let query = VenuesSearchBuilder.build(search);
    let parameters = VenuesSearchParametersBuilder.build(query);
    return this.fetch(parameters, Subpath.VENUES);
  }

  getEvents(search) {
    let query = EventsSearchBuilder.build(search);
    let parameters = EventsSearchParametersBuilder.build(query);
    return this.fetch(parameters, Subpath.EVENTS);
  }

  buildRequest(parameters, subpath) {
    return {
      uri: `${SeatGeekClient.getBaseUrl()}${subpath.value}`,
      qs: parameters.toJS(),
      headers: this.getHeaders(),
      json: SeatGeekClient.getIsJson(),
      useQuerystring: SeatGeekClient.getUseQueryString,
    }
  }

  fetch(parameters, subpath) {
    return rp(this.buildRequest(parameters, subpath))
      .then(response => response)
      .catch(err => console.log(err));
  }

  getHeaders() {
    return {
      'User-Agent': 'Request-Promise',
      'Authorization': `Basic ${this.clientId}`
    };
  }

  static getIsJson() {
    return true;
  }

  static getUseQueryString() {
    return true;
  }

  static getBaseUrl() {
    return 'https://api.seatgeek.com/2/';
  }
}
