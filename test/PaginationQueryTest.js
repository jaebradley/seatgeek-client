'use es6';

import {expect} from 'chai';

import PaginationQuery from '../src/data/request/query/PaginationQuery';

describe('Pagination Query Test', function() {
  it('tests expected pagination query building', function() {
    let perPage = 100;
    let page = 200;
    let expectedPageParameters = {
      per_page: 100,
      page: 200,
    };
    let paginationQuery = new PaginationQuery(perPage, page);

    expect(paginationQuery.perPage).to.equal(perPage);
    expect(paginationQuery.page).to.equal(page);
    expect(paginationQuery.buildPageParameters()).to.eql(expectedPageParameters);
  });

  it('tests exceptional page parameter building', function() {
    expect(() => new PaginationQuery('jaebradley', 1)).to.throw(Error);
    expect(() => new PaginationQuery(1, 'jaebradley')).to.throw(Error);
  });
});
