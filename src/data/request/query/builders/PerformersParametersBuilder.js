'use es6';

import PaginationParametersBuilder from './PaginationParametersBuilder';
import TaxonomyFiltersParametersBuilder from './TaxonomyFiltersParametersBuilder';
import GenreFiltersParametersBuilder from './GenreFiltersParametersBuilder';

export default class PerformersParametersBuilder {
  static build(query) {
    let parameters = {
      'id': query.ids,
      'slug': query.slugs,
      'q': query.queryString,
    };

    Object.assign(parameters,
                  GenreFiltersParametersBuilder.build(query.genres),
                  TaxonomyFiltersParametersBuilder.build(query.taxonomies),
                  PaginationParametersBuilder.build(query.pagination));

    return parameters;
  }
}
