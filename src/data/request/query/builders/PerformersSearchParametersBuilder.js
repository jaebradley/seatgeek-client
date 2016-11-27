'use es6';

import {Map} from 'immutable';

import PerformersSearch from '../PerformersSearch';
import Pagination from '../Pagination';

import PaginationParametersBuilder from './PaginationParametersBuilder';
import TaxonomyFiltersParametersBuilder from './TaxonomyFiltersParametersBuilder';
import GenreFiltersParametersBuilder from './GenreFiltersParametersBuilder';

export default class PerformersSearchParametersBuilder {
  static build(search) {
    let parameters = Map();
    if (typeof search.ids !== 'undefined') {
      parameters = parameters.set(PerformersSearchParametersBuilder.getIdsParameterName(),
                                  search.ids);
    }

    if (typeof search.slugs !== 'undefined') {
      parameters = parameters.set(PerformersSearchParametersBuilder.getSlugsParameterName(),
                                  search.slugs);
    }

    if (typeof search.queryString !== 'undefined') {
      parameters = parameters.set(PerformersSearchParametersBuilder.getQueryStringParameterName(),
                                  search.queryString);
    }

    if (typeof search.genres !== 'undefined') {
      parameters = parameters.merge(GenreFiltersParametersBuilder.build(search.genres));
    }

    if (typeof search.taxonomies !== 'undefined') {
      parameters = parameters.merge(TaxonomyFiltersParametersBuilder.build(search.taxonomies));
    }

    if ((typeof search.perPage !== 'undefined') && (typeof search.page !== 'undefined')) {
      parameters = parameters.merge(PaginationParametersBuilder.build(
        new Pagination({
          perPage: search.perPage,
          page: search.page,
        });
      ));
    }

    return parameters;
  }

  static getIdsParameterName() {
    return 'id';
  }

  static getSlugsParameterName() {
    return 'slug';
  }

  static getQueryStringParameterName() {
    return 'q';
  }
}
