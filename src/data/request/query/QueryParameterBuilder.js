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
import PerformerQueryParameter from './PerformerQueryParameter';
import TaxonomyQueryParameter from './TaxonomyQueryParameter';

export default class QueryParameterBuilder{

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
    let taxonomyQuery = QueryParameterBuilder.buildTaxonomyQueryParameters(taxonomyQueryParameters);
    let performerQuery = QueryParameterBuilder.buildPerformerQueryParameters(performerQueryParameters);
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

  static buildPerformerQueryParameters(performers) {
    if (!(performers instanceof Array)) {
      throw new Error('performers must be an array');
    }

    let performerQueryParameters = {};
    for (var i = 0; i < performers.length; i++) {
      let performer = performers[i];

      if (!(performer instanceof PerformerQueryParameter)) {
        throw new Error('all elements must be a PerformerQueryParameter');
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

  static buildTaxonomyQueryParameters(taxonomies) {
    if (!(taxonomies instanceof Array)) {
      throw new Error('taxonomies must be an array');
    }

    let taxonomyQueryParameters = {};
    for (var i = 0; i < taxonomies.length; i++) {
      let taxonomy = taxonomies[i];

      if (!(taxonomy instanceof TaxonomyQueryParameter)) {
        throw new Error('all elements must be a TaxonomyQueryParameter');
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
