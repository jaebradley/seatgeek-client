'use es6';

export default class PaginationQuery {
  constructor(perPage, page) {
    if (typeof perPage !== 'number') {
      throw new Error('perPage must be a number');
    }

    if (typeof page !== 'number') {
      throw new Error('page must be a number');
    }

    this.perPage = perPage;
    this.page = page;
  }

  buildQueryParameters() {
    return {
      per_page: this.perPage,
      page: this.page,
    };
  }
}
