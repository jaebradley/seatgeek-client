'use es6';

export default class PageQueryBuilder {
  static build(pageQuery) {
    return {
      per_page: pageQuery.perPage,
      page: pageQuery.page,
    };
  }
}
