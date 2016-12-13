'use es6';

import {Map} from 'immutable';

import PerformersSearch from './PerformersSearch';
import PaginationParametersBuilder from '../PaginationParametersBuilder';
import TaxonomyFiltersParametersBuilder from '../TaxonomyFiltersParametersBuilder';
import GenreFiltersParametersBuilder from './genre/GenreFiltersParametersBuilder';

export default class PerformersSearchParametersBuilder {
  static build(search) {
    if (!(search instanceof PerformersSearch)) {
      throw new TypeError('expected a PerformersSearch');
    }

    let parameters = Map();
    if (search.ids.size > 0) {
      parameters = parameters.set(PerformersSearchParametersBuilder.getIdsParameterName(),
                                  search.ids);
    }

    if (search.slugs > 0) {
      parameters = parameters.set(PerformersSearchParametersBuilder.getSlugsParameterName(),
                                  search.slugs);
    }

    if (typeof search.queryString !== 'undefined') {
      parameters = parameters.set(PerformersSearchParametersBuilder.getQueryStringParameterName(),
                                  search.queryString);
    }

    if (search.genres.size > 0) {
      parameters = parameters.merge(GenreFiltersParametersBuilder.build(search.genres));
    }

    if (search.taxonomies.size > 0) {
      parameters = parameters.merge(TaxonomyFiltersParametersBuilder.build(search.taxonomies));
    }

    parameters = parameters.merge(PaginationParametersBuilder.build(search));

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
