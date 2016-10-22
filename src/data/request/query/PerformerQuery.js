'use es6';

import PaginationQuery from './PaginationQuery';

export default class PerformerQuery {
  constructor(ids, slug, genreQueryParameters, taxonomyQueryParameters, queryString, perPage, page) {
    if (!(ids instanceof Array)) {
      throw new Error('ids must be an Array');
    }

    if ((typeof slug !== 'undefined') && (typeof slug !== 'string')) {
      throw new Error('defined slug must be String');
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
    this.slug = slug;
    this.genreQueryParameters = genreQueryParameters;
    this.taxonomyQueryParameters = taxonomyQueryParameters;
    this.queryString = queryString;
    this.paginationQUery = new PaginationQuery(perPage, page);
  }
};
