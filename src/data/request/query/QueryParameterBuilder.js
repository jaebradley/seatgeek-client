'use es6';

import Unit from '../../Unit';
import Genre from '../../Genre';
import Taxonomy from '../../Taxonomy';
import SortQuery from './SortQuery';
import FilterQuery from './FilterQuery';
import EventVenueQuery from './EventVenueQuery';
import VenueQuery from './VenueQuery';
import GeolocationQuery from './GeolocationQuery';
import PaginationQuery from './PaginationQuery';

export default class QueryParameterBuilder{

  static buildVenueQueryParameters(cityName, stateCode, countryCode, postalCode,
                                   queryString, useIpAddress, latitude, longitude, range,
                                   unit, perPage, page) {
    let queryParameters = {q: queryString};
    let geolocationQuery = new GeolocationQuery(useIpAddress, latitude, longitude, range, unit);
    let venueQuery = new VenueQuery(cityName, stateCode, countryCode, postalCode);
    let paginationQuery = new PaginationQuery(perPage, page);
    Object.assign(queryParameters,
                  venueQuery.buildQueryParameters(),
                  geolocationQuery.buildQueryParameters(),
                  paginationQuery.buildQueryParameters());

    return queryParameters;
  }

  static buildPerformerQueryParameters(ids, slug, primaryGenres, otherGenres, taxonomies, perPage, page) {
    let queryParameters = QueryParameterBuilder.buildPerformerAttributeParameters(ids, slug, primaryGenres, otherGenres, taxonomies);
    let paginationQuery = new PaginationQuery(perPage, page);
    Object.assign(queryParameters,
                  paginationQuery.buildQueryParameters());

    return queryParameters;
  }

  static buildPerformerAttributeParameters(ids, slug, primaryGenres, otherGenres, taxonomies) {
    if (!(ids instanceof Array)) {
      throw new Error('ids must be an Array');
    }

    if ((typeof slug !== 'undefined') && (typeof slug !== 'string')) {
      throw new Error('defined slug must be String');
    }

    if (!(primaryGenres instanceof Array)) {
      throw new Error('primaryGenres must be an Array');
    }

    if (!(otherGenres instanceof Array)) {
      throw new Error('otherGenres must be an Array');
    }

    if (!(taxonomies instanceof Array)) {
      throw new Error('taxonomies must be an Array');
    }

    return {
      'id': ids,
      'taxonomies.id': QueryParameterBuilder.buildTaxonomyIds(taxonomies),
      'genres[primary].slug': QueryParameterBuilder.buildGenreSlugs(primaryGenres),
      'genres.slug': QueryParameterBuilder.buildGenreSlugs(otherGenres),
    }
  }

  static buildGenreSlugs(genres) {
    if (!(genres instanceof Array)) {
      throw new Error('genres must be an Array');
    }

    let genreSlugs = [];
    for (i = 0; i < genres.length; i++) {
      let genre = genres[i];
      if (!(genre instanceof Genre)) {
        throw new Error('all elements must be a Genre');
      }
      genreSlugs.push(genre.value);
    }
    return genreSlugs;
  }

  static buildTaxonomyIds(taxonomies) {
    if (!(taxonomies instanceof Array)) {
      throw new Error('taxonomies must be an Array');
    }

    let taxonomyIds = [];
    for (i = 0; i < taxonomies.length; i++) {
      let taxonomy = taxonomies[i];
      if (!(taxonomy instanceof Taxonomy)) {
        throw new Error('all elements must be a Taxonomy');
      }
      taxonomyIds.push(taxonomy.id);
    }
    return taxonomyIds;
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

    let eventVenueQuery = new EventVenueQuery(venueIds, cityName, stateCode, countryCode, postalCode);
    let sortQuery = new SortQuery(sortOption, sortDirection);
    let filterQuery = new FilterQuery(filterOption, operator, filterValue);
    let geolocationQuery = new GeolocationQuery(useIpAddress, latitude, longitude, range, unit);
    let paginationQuery = new PaginationQuery(perPage, page);

    Object.assign(queryParameters,
                  sortQuery.buildQueryParameters(),
                  filterQuery.buildQueryParameters(),
                  eventVenueQuery.buildQueryParameters(),
                  geolocationQuery.buildQueryParameters(),
                  paginationQuery.buildQueryParameters());

    return queryParameters;
  }
};
