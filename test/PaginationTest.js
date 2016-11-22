'use es6';

import {expect} from 'chai';

import Pagination from '../src/data/request/query/Pagination';

describe('Pagination Test', function() {
  it('tests expected pagination building', function() {
    let perPage = 100;
    let page = 200;
    let expectedPageParameters = {
      per_page: 100,
      page: 200,
    };
    let pagination = new Pagination({perPage: perPage, page: page});

    expect(pagination.perPage).to.equal(perPage);
    expect(pagination.page).to.equal(page);
  });
});
