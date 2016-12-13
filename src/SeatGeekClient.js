'use es6';

import rp from 'request-promise';

import Subpath from './data/Subpath';

import Pagination from './query/Pagination';
import VenuesSearch from './query/venues/VenuesSearch';
import EventsSearch from './query/events/EventsSearch';
import PerformersSearch from './query/performers/PerformersSearch';

import PerformersSearchBuilder from './query/performers/PerformersSearchBuilder';
import PaginationBuilder from './query/PaginationBuilder';
import VenueSearchBuilder from './query/venues/VenuesSearchBuilder';
import EventsSearchBuilder from './query/events/EventsSearchBuilder';

import PerformersSearchParametersBuilder from './query/performers/PerformersSearchParametersBuilder';
import PaginationParametersBuilder from './query/PaginationParametersBuilder';
import VenueSearchParametersBuilder from './query/venues/VenuesSearchParametersBuilder';
import EventsSearchParametersBuilder from './query/events/EventsSearchParametersBuilder';

export default class SeatGeekClient {
  static getGenres(search) {
    let pagination = PaginationBuilder.build(search);
    let parameters = PaginationParametersBuilder.build(pagination);
    return SeatGeekClient.fetch(parameters, Subpath.GENRES.value);
  }

  static getTaxonomies(search) {
    let pagination = PaginationBuilder.build(search);
    let parameters = PaginationParametersBuilder.build(pagination);
    return SeatGeekClient.fetch(parameters, Subpath.TAXONOMIES.value);
  }

  static getPerformers(search) {
    let query = PerformersSearchBuilder.build(search);
    let parameters = PerformersSearchParametersBuilder.build(query);
    return SeatGeekClient.fetch(parameters, Subpath.PERFORMERS.value);
  }

  static getVenues(search) {
    let query = VenueSearchBuilder.build(search);
    let parameters = VenueSearchParametersBuilder.build(query);
    return SeatGeekClient.fetch(parameters, Subpath.VENUES.value);
  }

  static getEvents(search) {
    let query = EventsSearchBuilder.build(search);
    let parameters = EventsSearchParametersBuilder.build(query);
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
