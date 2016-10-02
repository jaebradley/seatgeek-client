'use es6';

import Unit from '../../Unit';
import Genre from '../../Genre';
import Taxonomy from '../../Taxonomy';
import SortQuery from './SortQuery';
import FilterQuery from './FilterQuery';
import EventVenueLocationQuery from './EventVenueLocationQuery';
import VenueLocationQuery from './VenueLocationQuery';
import GeolocationQuery from './GeolocationQuery';
import PaginationQuery from './PaginationQuery';
import PerformerAttributeQuery from './PerformerAttributeQuery';

export default class QueryParameterBuilder{

  static buildVenueQueryParameters(cityName, stateCode, countryCode, postalCode,
                                   queryString, useIpAddress, latitude, longitude, range,
                                   unit, perPage, page) {
    let queryParameters = {q: queryString};
    let geolocationQuery = new GeolocationQuery(useIpAddress, latitude, longitude, range, unit);
    let venueLocationQuery = new VenueLocationQuery(cityName, stateCode, countryCode, postalCode);
    let paginationQuery = new PaginationQuery(perPage, page);
    Object.assign(queryParameters,
                  venueLocationQuery.buildQueryParameters(),
                  geolocationQuery.buildQueryParameters(),
                  paginationQuery.buildQueryParameters());

    return queryParameters;
  }

  static buildPerformerQueryParameters(ids, slug, primaryGenres, otherGenres, taxonomies, parentTaxonomies, queryString, perPage, page) {
    let queryParameters = {q: queryString};
    let performerAttributeQuery = new PerformerAttributeQuery(ids, slug, primaryGenres, otherGenres, taxonomies, parentTaxonomies);
    let paginationQuery = new PaginationQuery(perPage, page);
    Object.assign(queryParameters,
                  performerAttributeQuery.buildQueryParameters(),
                  paginationQuery.buildQueryParameters());

    return queryParameters;
  }

  static buildEventsQueryParameters(taxonomies, performerSlugs, venueIds, cityName,
    stateCode, countryCode, postalCode, useIpAddress, latitude,
    longitude, range, unit, sortOption, sortDirection,
    filterOption, operator, filterValue, perPage, page) {

    if (!(performerSlugs instanceof Array)) {
      throw new Error('performerSlugs must be an Array');
    }

    if (!(taxonomies instanceof Array)) {
      throw new Error('taxonomies must be an Array');
    }

    let taxonomyIds = QueryParameterBuilder.buildTaxonomyIds(taxonomies);

    let queryParameters = {
      'performers.slug': performerSlugs,
      'taxonomies.id': taxonomyIds,
    };

    let eventVenueLocationQuery = new EventVenueLocationQuery(venueIds, cityName, stateCode, countryCode, postalCode);
    let sortQuery = new SortQuery(sortOption, sortDirection);
    let filterQuery = new FilterQuery(filterOption, operator, filterValue);
    let geolocationQuery = new GeolocationQuery(useIpAddress, latitude, longitude, range, unit);
    let paginationQuery = new PaginationQuery(perPage, page);

    Object.assign(queryParameters,
      sortQuery.buildQueryParameters(),
      filterQuery.buildQueryParameters(),
      eventVenueLocationQuery.buildQueryParameters(),
      geolocationQuery.buildQueryParameters(),
      paginationQuery.buildQueryParameters());

      return queryParameters;
  }

  static buildGenreSlugs(genres) {
    if (!(genres instanceof Array)) {
      throw new Error('genres must be an Array');
    }

    let genreSlugs = [];
    for (var i = 0; i < genres.length; i++) {
      let genre = genres[i];
      if (!(genre instanceof Genre)) {
        throw new Error('all elements must be a Genre');
      }
      genreSlugs.push(genre.slug);
    }
    return genreSlugs;
  }

  static buildTaxonomyIds(taxonomies) {
    if (!(taxonomies instanceof Array)) {
      throw new Error('taxonomies must be an Array');
    }

    let taxonomyIds = [];
    for (var i = 0; i < taxonomies.length; i++) {
      let taxonomy = taxonomies[i];
      if (!(taxonomy instanceof Taxonomy)) {
        throw new Error('all elements must be a Taxonomy');
      }
      taxonomyIds.push(taxonomy.id);
    }
    return taxonomyIds;
  }

};
