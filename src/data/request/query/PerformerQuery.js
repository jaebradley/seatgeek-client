'use es6';

import PaginationQuery from './PaginationQuery';
import GenreQueryParameter from './GenreQueryParameter';

export default class PerformerQuery {
  constructor(ids, slugs, genreQueryParameters, taxonomyQueryParameters,
              queryString, perPage, page) {
    if (!(ids instanceof Array)) {
      throw new Error('ids must be an Array');
    }

    if (!(slugs instanceof Array)) {
      throw new Error('slugs must be an Array');
    }

    if (!(genreQueryParameters instanceof Array)) {
      throw new Error('genre query parameters must be an Array');
    }

    if (!(taxonomyQueryParameters instanceof Array)) {
      throw new Error('taxonomy query parameters must be an Array');
    }

    if ((typeof queryString !== 'undefined') && (typeof queryString !== 'string')) {
      throw new Error('defined queryString must be String');
    }

    this.ids = ids;
    this.slugs = slugs;
    this.genreQueryParameters = genreQueryParameters;
    this.taxonomyQueryParameters = taxonomyQueryParameters;
    this.queryString = queryString;
    this.paginationQuery = new PaginationQuery(perPage, page);
  }

  buildQueryParameters() {
    let queryParameters = {
      'id': this.ids,
      'slug': this.slugs,
      'q': this.queryString,
    };

    Object.assign(queryParameters,
                  GenreQueryParameter.buildQueryParameters(this.genreQueryParameters),
                  TaxonomyQueryParameter.buildQueryParameters(this.taxonomyQueryParameters),
                  this.paginationQuery.buildQueryParameters());

    return queryParameters;
  }
};
