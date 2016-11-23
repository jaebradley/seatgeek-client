'use es6';

import {Map} from 'immutable';

import PerformersSearch from '../PerformersSearch';

import PaginationParametersBuilder from './PaginationParametersBuilder';
import TaxonomyFiltersParametersBuilder from './TaxonomyFiltersParametersBuilder';
import GenreFiltersParametersBuilder from './GenreFiltersParametersBuilder';

export default class PerformersParametersBuilder {
  static build(search) {
    if (!(search instanceof PerformersSearch)) {
      throw new TypeError('must be a PerformersSearch instance');
    }

    let parameters = Map();
    if (typeof search.ids !== 'undefined') {
      parameters = parameters.set(PerformersParametersBuilder.getIdsParameterName(),
                                  search.ids);
    }

    if (typeof search.slugs !== 'undefined') {
      parameters = parameters.set(PerformersParametersBuilder.getSlugsParameterName(),
                                  search.slugs);
    }

    if (typeof search.queryString !== 'undefined') {
      parameters = parameters.set(PerformersParametersBuilder.getQueryStringParameterName(),
                                  search.queryString);
    }

    parameters = parameters.merge(GenreFiltersParametersBuilder.build(search.genres),
                                  TaxonomyFiltersParametersBuilder.build(search.taxonomies),
                                  PaginationParametersBuilder.build(search.pagination));

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