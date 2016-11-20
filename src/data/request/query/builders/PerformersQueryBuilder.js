'use es6';

import PageQueryBuilder from './PageQueryBuilder';
import TaxonomiesQueryBuilder from './TaxonomiesQueryBuilder';
import GenresQueryBuilder from './GenresQueryBuilder';

export default class PerformersQueryBuilder {
  static build(performersQuery) {
    let queryParameters = {
      'id': performersQuery.ids,
      'slug': performersQuery.slugs,
      'q': performersQuery.queryString,
    };

    Object.assign(queryParameters,
                  GenresQueryBuilder.build(performersQuery.genreQueryParameters),
                  TaxonomiesQueryBuilder.build(performersQuery.taxonomyQueryParameters),
                  PageQueryBuilder.build(performersQuery.pageQuery));

    return queryParameters;
  }
}
