'use es6';

export default class PaginationBuilder {
  static build(pagination) {
    return {
      per_page: pagination.perPage,
      page: pagination.page,
    };
  }
}
