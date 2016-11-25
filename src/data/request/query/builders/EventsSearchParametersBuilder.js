'use es6';

import {List, Map} from 'immutable';

import EventsSearch from '../EventsSearch';

import VenuesFilterParametersBuilder from './VenuesFilterParametersBuilder';
import PerformersFiltersParametersBuilder from './PerformersFiltersParametersBuilder';
import TaxonomyFiltersParametersBuilder from './TaxonomyFiltersParametersBuilder';
import GeolocationParametersBuilder from './GeolocationParametersBuilder';
import SortFilterParametersBuilder from './SortFilterParametersBuilder';
import PaginationParametersBuilder from './PaginationParametersBuilder';
import FiltersParametersBuilder from './FiltersParametersBuilder';

export default class EventsSearchParametersBuilder {
  static build(search) {
    let parameters = Map();
    if (typeof search.ids !== 'undefined') {
      parameters = parameters.set(EventsSearchParametersBuilder.getIdsParameterName(),
                                  search.ids);
    }

    parameters = parameters.merge(VenuesFilterParametersBuilder.build(search.venues),
                                  PerformersFiltersParametersBuilder.build(search.performers),
                                  TaxonomyFiltersParametersBuilder.build(search.taxonomies),
                                  GeolocationParametersBuilder.build(search.geolocation),
                                  SortFilterParametersBuilder.build(search.sort),
                                  FiltersParametersBuilder.build(search.filters),
                                  PaginationParametersBuilder.build(search.pagination));

    return parameters;
  }

  static getIdsParameterName() {
    return 'id';
  }
}
