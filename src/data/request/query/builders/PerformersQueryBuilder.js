'use es6';

import PaginationParametersBuilder from './PaginationParametersBuilder';
import TaxonomyFiltersParametersBuilder from './TaxonomyFiltersParametersBuilder';
import GenreFiltersParametersBuilder from './GenreFiltersParametersBuilder';

export default class PerformersQueryBuilder {
  static build(performersQuery) {
    let queryParameters = {
      'id': performersQuery.ids,
      'slug': performersQuery.slugs,
      'q': performersQuery.queryString,
    };

    Object.assign(queryParameters,
                  GenreFiltersParametersBuilder.build(performersQuery.genres),
                  TaxonomyFiltersParametersBuilder.build(performersQuery.taxonomies),
                  PaginationParametersBuilder.build(performersQuery.pagination));

    return queryParameters;
  }
}
