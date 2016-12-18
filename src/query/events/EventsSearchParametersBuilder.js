'use es6';

import {List, Map} from 'immutable';

import EventsSearch from './EventsSearch';
import FiltersParametersBuilder from './filter/FiltersParametersBuilder';
import GeolocationParametersBuilder from '../GeolocationParametersBuilder';
import PaginationParametersBuilder from '../PaginationParametersBuilder';
import PerformersFiltersParametersBuilder from './performer/PerformersFiltersParametersBuilder';
import SortFilterParametersBuilder from './sort/SortFilterParametersBuilder';
import TaxonomyFiltersParametersBuilder from '../TaxonomyFiltersParametersBuilder';
import VenuesPropertiesParametersBuilder from '../VenuesPropertiesParametersBuilder';

export default class EventsSearchParametersBuilder {
  static build(search) {
    if (!(search instanceof EventsSearch)) {
      throw new TypeError('expected EventsSearch');
    }

    let parameters = Map();
    if (search.ids.size > 0) {
      parameters = parameters.set('id', search.ids);
    }

    parameters = parameters.merge(VenuesPropertiesParametersBuilder.build(search.venues),
                                  PerformersFiltersParametersBuilder.build(search.performers),
                                  TaxonomyFiltersParametersBuilder.build(search.taxonomies),
                                  GeolocationParametersBuilder.build(search.geolocation),
                                  SortFilterParametersBuilder.build(search.sort),
                                  FiltersParametersBuilder.build(search.filters),
                                  PaginationParametersBuilder.build(search.pagination));

    return parameters;
  }
}
