'use es6';

export default class PaginationParametersBuilder {
  static build(pagination) {
    return {
      per_page: pagination.perPage,
      page: pagination.page,
    };
  }
}
