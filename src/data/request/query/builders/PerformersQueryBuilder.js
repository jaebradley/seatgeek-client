'use es6';

import PageQueryBuilder from './PageQueryBuilder';
import TaxonomiesQueryBuilder from './TaxonomiesQueryBuilder';
import GenresQueryBuilder from './GenresQueryBuilder';

export default class PerformersQueryBuilder {
  static buildQueryParameters(performersQuery) {
    let queryParameters = {
      'id': performersQuery.ids,
      'slug': performersQuery.slugs,
      'q': performersQuery.queryString,
    };

    Object.assign(queryParameters,
                  GenresQueryBuilder.buildQueryParameters(performersQuery.genreQueryParameters),
                  TaxonomiesQueryBuilder.buildQueryParameters(performersQuery.taxonomyQueryParameters),
                  PageQueryBuilder.buildQueryParameters(performersQuery.perPage, performersQuery.page));

    return queryParameters;
  }
}
