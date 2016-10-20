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
import PerformerEventQueryParameter from './PerformerEventQueryParameter';
import TaxonomyEventQueryParameter from './TaxonomyEventQueryParameter';

export default class QueryParameterBuilder{

  static buildVenueQueryParameters(cityName, stateCode, countryCode, postalCode,
                                   queryString, useIpAddress, latitude, longitude,
                                   range, unit, perPage, page) {
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

  static buildPerformerQueryParameters(ids, slug, primaryGenres, otherGenres, taxonomies,
                                       parentTaxonomies, queryString, perPage, page) {
    let queryParameters = {q: queryString};
    let performerAttributeQuery = new PerformerAttributeQuery(ids, slug, primaryGenres, otherGenres, taxonomies, parentTaxonomies);
    let paginationQuery = new PaginationQuery(perPage, page);
    Object.assign(queryParameters,
                  performerAttributeQuery.buildQueryParameters(),
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

  static buildEventsQueryParameters(performerQueryParameters, taxonomyQueryParameters, venueIds, cityName,
                          stateCode, countryCode, postalCode, useIpAddress,
                          latitude, longitude, range, unit, sortOption,
                          sortDirection, filterQueries, perPage, page) {
    if (!(performerQueryParameters instanceof Array)) {
      throw new Error('performers must be an Array');
    }

    if (!(taxonomyQueryParameters instanceof Array)) {
      throw new Error('taxonomies must be an Array');
    }

    let queryParameters = {};
    let taxonomyQuery = QueryParameterBuilder.buildTaxonomyEventQueryParameters(taxonomyQueryParameters);
    let performerQuery = QueryParameterBuilder.buildPerformerEventQueryParameters(performerQueryParameters);
    let eventVenueLocationQuery = new EventVenueLocationQuery(venueIds, cityName, stateCode, countryCode, postalCode);
    let sortQuery = new SortQuery(sortOption, sortDirection);
    let geolocationQuery = new GeolocationQuery(useIpAddress, latitude, longitude, range, unit);
    let paginationQuery = new PaginationQuery(perPage, page);

    Object.assign(queryParameters,
                  taxonomyQuery,
                  performerQuery,
                  sortQuery.buildQueryParameters(),
                  FilterQuery.buildFilterQueriesParameters(filterQueries),
                  eventVenueLocationQuery.buildQueryParameters(),
                  geolocationQuery.buildQueryParameters(),
                  paginationQuery.buildQueryParameters());

    return queryParameters;
  }

  static buildPerformerEventQueryParameters(performers) {
    if (!(performers instanceof Array)) {
      throw new Error('performers must be an array');
    }

    let performerQueryParameters = {};
    for (var i = 0; i < performers.length; i++) {
      let performer = performers[i];

      if (!(performer instanceof PerformerEventQueryParameter)) {
        throw new Error('all elements must be a PerformerEventQueryParameter');
      }

      let queryParameterName = performer.buildParameterName();
      let queryParameterValues = [];

      if (queryParameterName in performerQueryParameters) {
        queryParameterValues = performerQueryParameters[queryParameterName];
      }

      queryParameterValues.push(performer.value);
      performerQueryParameters[queryParameterName] = queryParameterValues;
    }

    return performerQueryParameters;
  }

  static buildTaxonomyEventQueryParameters(taxonomies) {
    if (!(taxonomies instanceof Array)) {
      throw new Error('taxonomies must be an array');
    }

    let taxonomyQueryParameters = {};
    for (var i = 0; i < taxonomies.length; i++) {
      let taxonomy = taxonomies[i];

      if (!(taxonomy instanceof TaxonomyEventQueryParameter)) {
        throw new Error('all elements must be a TaxonomyEventQueryParameter');
      }

      let queryParameterName = taxonomy.buildParameterName();
      let queryParameterValues = [];

      if (queryParameterName in taxonomyQueryParameters) {
        queryParameterValues = taxonomyQueryParameters[queryParameterName];
      }

      queryParameterValues.push(taxonomy.getValue());
      taxonomyQueryParameters[queryParameterName] = queryParameterValues;
    }

    return taxonomyQueryParameters;
  }
};
