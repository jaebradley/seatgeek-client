'use es6';

export default class PageQueryBuilder {
  static buildQueryParameters(perPage, page) {
    return {
      per_page: perPage,
      page: page,
    };
  }
}
