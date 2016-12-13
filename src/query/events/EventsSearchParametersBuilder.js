'use es6';

import {List, Map} from 'immutable';

import Pagination from '../Pagination';

import EventsSearch from './EventsSearch';
import FiltersParametersBuilder from './filter/FiltersParametersBuilder';
import GeolocationParametersBuilder from '../GeolocationParametersBuilder';
import PaginationParametersBuilder from '../PaginationParametersBuilder';
import PerformersFiltersParametersBuilder from './performer/PerformersFiltersParametersBuilder';
import SortFilterParametersBuilder from './sort/SortFilterParametersBuilder';
import TaxonomyFiltersParametersBuilder from '../TaxonomyFiltersParametersBuilder';
import VenuesFilterParametersBuilder from './venue/VenuesFilterParametersBuilder';

export default class EventsSearchParametersBuilder {
  static build(search) {
    if (!(search instanceof EventsSearch)) {
      throw new TypeError('expected EventsSearch');
    }

    let parameters = Map();
    if (search.ids instanceof List) {
      parameters = parameters.set(EventsSearchParametersBuilder.getIdsParameterName(),
                                  search.ids);
    }

    if (search.venueIds instanceof List) {
      parameters = parameters.set(EventsSearchParametersBuilder.getVenueIdsParameterName().
                                  search.venueIds);
    }

    parameters = parameters.merge(VenuesFilterParametersBuilder.build(search.venues),
                                  PerformersFiltersParametersBuilder.build(search.performers),
                                  TaxonomyFiltersParametersBuilder.build(search.taxonomies),
                                  GeolocationParametersBuilder.build(search.geolocation),
                                  SortFilterParametersBuilder.build(search.sort),
                                  FiltersParametersBuilder.build(search.filters),
                                  PaginationParametersBuilder.build(new Pagination({perPage: search.perPage, page: search.page})));

    return parameters;
  }

  static getIdsParameterName() {
    return 'id';
  }

  static getVenueIdsParameterName() {

  }
}
